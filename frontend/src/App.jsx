import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './Login'
import Blog from './Blog'
import Index from './pages/Index'
import NotFound from './pages/NotFound'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/' element={<Index />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    </BrowserRouter>
    )
}

export default App