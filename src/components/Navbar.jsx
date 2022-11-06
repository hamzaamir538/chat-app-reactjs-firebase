import React, { useContext, useState } from "react";
import logo from "./../img/heron-logo.png";
import avatar from "./../img/AvatarMaker.png";
import { signOut } from "firebase/auth";
import { auth } from "../Firebase";
import { LoginContext } from "../context/LoginContext";

const Navbar = () => {
  const [isDropDown, setIsDropDown] = useState(true);
  const { loggedInUser, setLoggedInUser, isAuthenticated, setIsAuthenticated } =
    useContext(LoginContext);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        console.log("SignOut Successfully");
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
        <button className="imgDropBtn" onClick={() => setIsDropDown(!isDropDown)}>
          <img src={avatar} width="100%" alt="" />
        </button>
        {!isDropDown && (
          <div className="navDropDown">
            <div>Profile</div>
            <div>About</div>
            <div><button onClick={handleLogout}>Logout</button></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
