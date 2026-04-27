import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './Login'
import Blog from './Blog'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/' element={<Blog />} />
    </Routes>
    </BrowserRouter>
    )
}

export default App