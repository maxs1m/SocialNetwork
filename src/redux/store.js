import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";


let store = {
    _state: {
        profilePage: {
            postsData: [
                {id: 1, text: 'Hi, how are you?', likes: '0'},
                {id: 2, text: 'It is my first post', likes: '5'}
            ],
            newPostText: ''
        },
        messagesPage: {
            dialogsData: [
                {id: 1, name: 'Дмитрий'},
                {id: 2, name: 'Андрей'},
                {id: 3, name: 'Света'},
                {id: 4, name: 'Саша'},
                {id: 5, name: 'Виктор'}
            ],
            messagesData: [
                {id: 1, text: 'Привет'},
                {id: 2, text: 'Как дела?'},
                {id: 3, text: 'Пишу'},
                {id: 4, text: 'Первый'},
                {id: 5, text: 'React'}
            ],
            newMessageText: ''
        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log('State changed')
    },
    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = dialogsReducer(this._state.messagesPage, action);
        this._state.sidebarPage = sidebarReducer(this._state.sidebarPage, action);
        this._callSubscriber(this._state)
    }
}

window.store = store

export default store