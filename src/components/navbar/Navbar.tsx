import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { IRoute } from '../../router/routes'

interface NavbarProps {
    routes: IRoute[]
    isVertical: boolean
}

const Navbar:React.FC<NavbarProps> = ({routes, isVertical}) => {
  return (
    <>
        <nav className={`navbar ${isVertical ? "vertical" : "horizontal"}`}>
            {routes.map(({label, path}) => (
                <NavLink to={path}>
                    {label}
                </NavLink>
            ))}
        </nav>
        <Outlet />
    </>
  )
}

export default Navbar