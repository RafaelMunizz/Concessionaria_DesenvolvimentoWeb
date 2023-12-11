import { Route, Routes } from 'react-router-dom'
import { Login } from './pages/Login'
import { Home } from './pages/Home'
import { Posts } from './pages/Posts'
import { Who } from './pages/Who'
import { RouteLayout } from './components/RouteLayout'
import { LayoutDefault } from './layouts/LayoutDefault'
import { Contact } from './pages/Contact'
import { UserPage } from './pages/UserPage'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<RouteLayout withLayout={false} page={<Login />} />} />
      <Route path="/login" element={<RouteLayout withLayout={false} page={<Login />} />} />
      {/* <Route path="/home" element={<RouteLayout withLayout={true} page={<Home />} />} /> */} 
      <Route path="/home" element={<LayoutDefault><Home /></LayoutDefault>} />
      <Route path="/posts" element={<RouteLayout withLayout={true} page={<Posts />} />} />
      <Route path="/who" element={<RouteLayout withLayout={true} page={<Who />} />} />
      <Route path="/contact" element={<RouteLayout withLayout={true} page={<Contact />} />} />
      <Route path="/user" element={<RouteLayout withLayout={true} page={<UserPage />} />} />
    </Routes>
  )
}