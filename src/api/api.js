import axios from "axios";

const instance = axios.create ( { 
   withCredentials: true,
   baseURL: 'https://social-network.samuraijs.com/api/1.0/',
   headers: { "API-KEY": "dee5cfcc-ae2d-4b54-8227-023650bdb41f" } }
)

export const getUsers = (currentPage = 1, pageSize = 10) => {
   return instance.get(`users?page=${currentPage}&count=${pageSize}`)
}

export const subscribeAddUsers = (usersID) => {
   return instance.post(`follow/${usersID}`)
}

export const unsubscribeUsers = (usersID) => {
   return instance.delete(`follow/${usersID}`)
}

export const authUser = () => {
   return instance.get(`auth/me`)
      
}

export const dataProfile = (userId) => {
   return instance.get(`profile/` + userId)
}

export const statusProfile = (userId) => {
   return instance.get(`profile/status/` + userId)
}

export const newStatusProfile = (status) => {
   return instance.put(`profile/status/`, {status: status})
}

export const loginUser = (formData) => {
   return instance.post(`auth/login`, {email: formData.login, password: formData.password})
}