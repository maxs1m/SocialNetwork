const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
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
    ]
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            return {
                ...state,
                messagesData: [...state.messagesData, {id: 6, text: action.newText}]
            }
        default:
            return state
    }
}

export const addMessageActionCreator = (text) => ({
    type: ADD_MESSAGE,
    newText: text
})

export default dialogsReducer