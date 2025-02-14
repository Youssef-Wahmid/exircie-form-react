import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Service = () => {
  return (
    <>
    <h1>Services </h1>
    <NavLink to={'service1'}> Service1</NavLink> <br />
    <NavLink to={'service2'}> Service2</NavLink>
    <Outlet />
    </>
  )
}

export default Service