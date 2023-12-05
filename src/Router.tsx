import { Route, Routes } from 'react-router-dom'
import { Login } from './pages/Login'
import { Home } from './pages/Home'
import { Posts } from './pages/Posts'
import { Who } from './pages/Who'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/posts" element={<Posts />} />
      <Route path="/who" element={<Who />} />
    </Routes>
  )
}