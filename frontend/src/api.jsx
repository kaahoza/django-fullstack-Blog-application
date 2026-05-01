import axios from "axios"

const API = axios.create({
    baseURL: "https://django-fullstack-blog-application-6.onrender.com/api/",
    
    
})

// const token = localStorage.getItem("access");

// API.get("/", {
//   headers: {
//     Authorization: `Bearer ${token}`,
//     'Content-Type': 'application/json'
//   },
// });

export const setAuthToken = (Token) => {
    if(Token) {
        API.defaults.headers.common["Authorization"] = `Bearer ${token}`
    }
}

export default API