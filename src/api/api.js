import axios from "axios";

export const getUsers = (currentPage = 1, pageSize = 10) => {
   return axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`, { withCredentials: true })
}

export const subscribeAddUsers = (usersID) => {
   return axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${usersID}`, {},
   { withCredentials: true, headers: { "API-KEY": "dee5cfcc-ae2d-4b54-8227-023650bdb41f" } })
}

export const unsubscribeUsers = (usersID) => {
   return axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${usersID}`, 
   { withCredentials: true, headers: { "API-KEY": "dee5cfcc-ae2d-4b54-8227-023650bdb41f" } })
}