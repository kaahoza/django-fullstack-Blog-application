
import { useState } from 'react'
import API, { setAuthToken } from "./api";
const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('')

    const handleLogin= async() => {
        const res = await API.post("login/", {username, password})
        localStorage.setItem("token", res.data.access)
        setAuthToken(res.data.access)
        window.location.href = "/"

    }
  return (
    <div className='p-10'>
        <h1>
            Login
        </h1>
        <input type='text' placeholder="Username" onChange={(e)=>setUsername(e.target.value)} />
        
        <input type="password" placeholder='password' onChange={(e) => setPassword(e.target.value)}/>
        <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Login