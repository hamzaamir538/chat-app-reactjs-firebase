import React from 'react'
import Navbar from './Navbar';
import Search from './Search';

const Sidebar = () => {
  return (
    <div className='sidebarBox'>
      <Navbar />
      <Search />
    </div>
  )
}

export default Sidebar