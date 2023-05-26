import React from 'react'
import styles from '../styles/Layout.module.css'
import Navbar from './Navbar'
import Home from '@/pages'
import Footer from './Footer'

const Layout = ({children}) => {
  return (
    <div>
      {/* <Navbar /> */}
      {children}
      {/* <Footer /> */}
    </div>
  )
}

export default Layout