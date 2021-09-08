import {authAPI} from "../Api/api";

const SET_USER_DATA = 'SET_USER_DATA'
const IS_ERROR_LOGIN = 'IS_ERROR_LOGIN'

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    errorMessage: ""
}

const authReducers = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data
            }
        case IS_ERROR_LOGIN:
            return {
                ...state,
                errorMessage: action.message
            }
        default:
            return state
    }
}

export const setUserData = (id, email, login, isAuth, errorMessage) => ({type: SET_USER_DATA, data: {id, email, login, isAuth, errorMessage}})
const loginError = (message) => ({type: IS_ERROR_LOGIN, message})

export const getUserData = () => {
    return async (dispatch) => {
        let data = await authAPI.setUserData()
        if (data.resultCode === 0) {
            let {id, email, login} = data.data
            dispatch(setUserData(id, email, login, true, ""))
        }
    }
}

export const login = (email, password, rememberMe) => {
    return async (dispatch) => {
        let data = await authAPI.login(email, password, rememberMe)
        if (data.resultCode === 0) {
            dispatch(getUserData())
        } else {
            if (data.messages[0].length > 0) dispatch(loginError(data.messages[0]))
        }
    }
}

export const logout = () => {
    return async (dispatch) => {
        let data = await authAPI.logout()
        if (data.resultCode === 0) {
            dispatch(setUserData(null, null, null, false))
        }
    }
}

export default authReducers