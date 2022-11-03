import React from 'react';
import logo from './../img/heron-logo.png';
import avatar from './../img/AvatarMaker.png';
import { signOut } from "firebase/auth";
import { auth } from '../Firebase';

const Navbar = () => {

  const handleLogout = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      console.log("SignOut Successfully");
    }).catch((error) => {
      console.log("SignOut Error:");
      console.log(error);
    });
  }

  return (
    <div className='navbar'>
      <div className='navLogo'>
        <img src={logo} width='100%' alt="" />
      </div>
      <div className='navImg'>
        <img src={avatar} width='100%' alt="" />
      </div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Navbar