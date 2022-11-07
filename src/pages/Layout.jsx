import React from 'react'
import Sidebar from '../components/Sidebar'
import Home from './Home'

const Layout = () => {
  return (
    <main className='layoutBox'>
        <Sidebar />
        <Home />
    </main>
  )
}

export default Layout