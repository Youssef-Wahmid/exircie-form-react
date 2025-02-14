import React from 'react'
import Footer from './Footer'
import NavBar from './NavBar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
    <NavBar/>
    <h1>---------------------------------------------</h1>
    <Outlet/>
    <h1>---------------------------------------------</h1>
    <Footer/>
    </>
  )
}

export default Layout