import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Navbar from '../components/navbar/Navbar'
import { routes } from './routes'
import Flacko from '../pages/Flacko'
import Products from '../pages/Products'
import MuiNavbar from '../components/navbar/MuiNavbar'
import Login  from '../pages/Login'
import Register from '../pages/Register'
import ProtectedRoutes from './ProtectedRoutes'
import Users from '../pages/Users'

const Router:React.FC = () => {
  return (
    <Routes>
        <Route path='/' element={<MuiNavbar routes={routes}/>}>
            <Route index element={<Home />}/>
            <Route path='/about' element={<About />}/>
            <Route path='/contact' element={<Contact />}/>
            <Route path='/users' element={<Users />}/>
        </Route>

        <Route element={<ProtectedRoutes />}>
          <Route path='/products' element={<Products />}/>
        </Route>

        <Route>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Route>

        <Route path='/' element={<Navbar routes={routes} isVertical/>}>
            <Route path='/flacko' element={<Flacko />}/>
        </Route>
    </Routes>
  )
}

export default Router 