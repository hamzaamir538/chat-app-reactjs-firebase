import React, {useContext} from 'react';
import logo from './../img/heron-logo.png';
import avatar from './../img/AvatarMaker.png';
import { signOut } from "firebase/auth";
import { auth } from '../Firebase';
import {LoginContext} from '../context/LoginContext';

const Navbar = () => {

  const {loggedInUser,
    setLoggedInUser,
    isAuthenticated,
    setIsAuthenticated} = useContext(LoginContext);

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
      <button onClick={handleLogout}>{loggedInUser.displayName}</button>
    </div>
  )
}

export default Navbar