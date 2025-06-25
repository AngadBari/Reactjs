import React from 'react'
import Header from './compontes/Header/Header'
import Footer from './compontes/Footer/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
    return (
        <>
        <Header/>
        <Outlet/>
        <Footer/>
        </>
    )
}

export default Layout
