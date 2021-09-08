import {profileApi} from "../Api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_USER_STATUS = 'SET_USER_STATUS'
const SET_USER_PHOTO = 'SET_USER_PHOTO'
const IS_ERROR_PROFILE = 'IS_ERROR_PROFILE'

let initialState = {
    postsData: [
        {id: 1, text: 'Hi, how are you?', likes: '0'},
        {id: 2, text: 'It is my first post', likes: '5'}
    ],
    profile: null,
    errorMessage: "",
    status: ''
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {...state, postsData: [...state.postsData, {id: 3, text: action.newText, likes: 0}]}
        case SET_USER_PROFILE:
            return {...state, profile: action.profile, errorMessage: ""}
        case SET_USER_STATUS:
            return {...state, status: action.status}
        case SET_USER_PHOTO:
            return {...state, profile: {...state.profile, photos: action.photos}}
        case IS_ERROR_PROFILE:
            return {...state, errorMessage: action.message}
        default:
            return state
    }
}


export const addPostActionCreator = (text) => ({type: ADD_POST, newText: text})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setUserStatus = (status) => ({type: SET_USER_STATUS, status})
export const savePhotoSuccess = (photos) => ({type: SET_USER_PHOTO, photos})
const profileError = (message) => ({type: IS_ERROR_PROFILE, message})

export const getUserProfile = (userId) => {
    return async (dispatch) => {
        let data = await profileApi.getUserProfile(userId)
        dispatch(setUserProfile(data))
    }
}

export const getUserStatus = (userId) => {
    return async (dispatch) => {
        let data = await profileApi.getStatus(userId)
        dispatch(setUserStatus(data))
    }
}

export const updateUserStatus = (status) => {
    return async (dispatch) => {
        let data = await profileApi.updateStatus(status)
        if (data.resultCode === 0) dispatch(setUserStatus(status))
    }
}

export const savePhoto = (file) => {
    return async (dispatch) => {
        let data = await profileApi.savePhoto(file)
        if (data.resultCode === 0) dispatch(savePhotoSuccess(data.data.photos))
    }
}

export const saveProfile = (profile) => {
    return async (dispatch, getState) => {
        let data = await profileApi.saveProfile(profile)
        if (data.resultCode === 0) dispatch(getUserProfile(getState().auth.id))
        else if (data.messages.length > 0) dispatch(profileError(data.messages))
    }
}

export default profileReducer