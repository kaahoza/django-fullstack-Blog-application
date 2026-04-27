import axios from "axios"

const API = axios.create({
    baseURL: "https://django-fullstack-blog-application.onrender.com/api/",
})

export const setAuthToken = (Token) => {
    if(Token) {
        API.defaults.headers.common["Authorization"] = `Bearer ${token}`
    }
}

export default API