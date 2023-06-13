import React from 'react'
import Topbar from './topbar/Topbar'
import Footer from './footer/Footer'

export default function Layout({children}) {
  return (
    <div>
        <Topbar/>
        {children}
        <Footer/>
    </div>
  )
}
