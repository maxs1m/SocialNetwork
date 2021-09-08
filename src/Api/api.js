import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "81126361-8744-449c-9494-11a205a476bd"
    }
})

export const userAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    },
    getUserProfile(userId) {
        alert('Поменять API')
        return profileApi.getUserProfile(userId)
    }
}

export const followAPI = {
    followUser(itemId) {
        return instance.post(`follow/${itemId}`).then(response => response.data)
    },
    unfollowUser(itemId) {
        return instance.delete(`follow/${itemId}`).then(response => response.data)
    }
}

export const authAPI = {
    setUserData() {
        return instance.get(`auth/me`).then(response => response.data)
    },
    login(email, password, rememberMe = false) {
        return instance.post('auth/login', {email, password, rememberMe}).then(response => response.data)
    },
    logout() {
        return instance.delete('auth/login').then(response => response.data)
    }
}

export const profileApi = {
    getUserProfile(userId) {
        return instance.get('profile/'+ userId).then(response => response.data)
    },
    getStatus(userId) {
        return instance.get('profile/status/'+ userId).then(response => response.data)
    },
    updateStatus(status) {
        return instance.put('profile/status/', {status: status}).then(response => response.data)
    },
    savePhoto(file) {
        let formData = new FormData()
        formData.append('image', file)
        return instance.put('profile/photo/', formData, {headers: {'Content-Type': 'multipart/form-data'}}).then(response => response.data)
    },
    saveProfile(profile) {
        return instance.put('profile', profile).then(response => response.data)
    }
}