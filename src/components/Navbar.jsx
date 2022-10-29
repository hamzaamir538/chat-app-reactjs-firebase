import React from 'react';
import logo from './../img/heron-logo.png';
import avatar from './../img/AvatarMaker.png';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='navLogo'>
        <img src={logo} width='100%' alt="" />
      </div>
      <div className='navImg'>
        <img src={avatar} width='100%' alt="" />
      </div>
    </div>
  )
}

export default Navbar