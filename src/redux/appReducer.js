import {getUserData} from "./authReducer";

const SET_INITIALIZED = 'SET_INITIALIZED'

let initialState = {
    initialized: false
}

const appReducers = (state = initialState, action) => {
    switch (action.type) {
        case SET_INITIALIZED:
            return {
                ...state,
                initialized: true
            }
        default:
            return state
    }
}

export const initializedSuccess = () => ({type: SET_INITIALIZED})


export const initialize = () => {
    return (dispatch) => {
        let promise = dispatch(getUserData())
        promise.then(() => dispatch(initializedSuccess()))
    }
}


export default appReducers