import axios from "axios"

const API = axios.create({
    baseURL: "https://django-fullstack-blog-application-6.onrender.com/api/blog",
})

export const setAuthToken = (Token) => {
    if(Token) {
        API.defaults.headers.common["Authorization"] = `Bearer ${token}`
    }
}

export default API