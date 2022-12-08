import axios from "axios"

export const apiUrl = "http://localhost:8080"
export const savedToken = localStorage.getItem("token")

export const axiosAuth = axios.create({
    baseURL:apiUrl,
    headers:{
        Accept: `application/json`,
        token:savedToken,
    }
})