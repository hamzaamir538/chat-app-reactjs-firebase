import React, { useContext, useState, useEffect } from "react";
import logo from "./../img/heron-logo.png";
import avatar from "./../img/AvatarMaker.png";
import { signOut } from "firebase/auth";
import { auth } from "../Firebase";
import { LoginContext } from "../context/LoginContext";

const Navbar = () => {
  const [isDropDown, setIsDropDown] = useState(true);
  const { profile } =
    useContext(LoginContext);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        console.log("SignOut Error:");
        console.log(error);
      });
  };

  return (
    <div className="navbar">
      <div className="navLogo">
        <img src={logo} width="100%" alt="" />
      </div>
      <div className="navImg">
        <button
          className="imgDropBtn"
          onClick={() => setIsDropDown(!isDropDown)}
        >
          <img src={profile ? (profile.data.photoURL == '' ? avatar : profile.data.photoURL) : avatar} width="100%" alt="" />
        </button>
        {!isDropDown && (
          <div className="navDropDown">
            <div>Profile</div>
            <div>{profile ? profile.data.displayName : 'Full Name'}</div>
            <div>{profile ? profile.data.email : 'Email'}</div>
            <div>
              <button onClick={handleLogout}>Logout</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
