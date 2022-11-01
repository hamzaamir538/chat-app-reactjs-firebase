import React, { useState } from "react";
import profileImg from "./../img/avataaars.png";
import { BiLogInCircle } from "react-icons/bi";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";

const Register = () => {
  const [registerDetails, setRegisterDetails] = useState({
    fullName: '',
    userName: '',
    email: '',
    password: '',
    cnfrmPassword: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(registerDetails);
  }

  return (
    <div className="loginPage">
      <form action="" onSubmit={handleSubmit}>
        <div className="heading">
          <div>Register</div>
        </div>
        <div className="profileImg">
          <img src={profileImg} width="100%" alt="" />
        </div>
        <div className="inputBox">
          <label htmlFor="fullName">Full Name:</label>
          <input
            type="text"
            name="fullName"
            id="fullName"
            placeholder="John Doe"
            value={registerDetails.fullName}
            onChange={(e) => setRegisterDetails({...registerDetails, fullName: e.target.value})}
          />
        </div>
        <div className="inputBox">
          <label htmlFor="userName">Username:</label>
          <input
            type=""
            name="userName"
            id="userName"
            placeholder="johndoe1"
            value={registerDetails.userName}
            onChange={(e) => setRegisterDetails({...registerDetails, userName: e.target.value})}
          />
        </div>
        <div className="inputBox">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="johndoe1@email.com"
            value={registerDetails.email}
            onChange={(e) => setRegisterDetails({...registerDetails, email: e.target.value})}
          />
        </div>
        <div className="inputBox">
          <label htmlFor="password">Password:</label>
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            id="password"
            placeholder="********"
            value={registerDetails.password}
            onChange={(e) => setRegisterDetails({...registerDetails, password: e.target.value})}
          />
          <button
            className="showPasswordBtn"
            type="button"
            onClick={() => setShowPassword(!showPassword)}
          >
            {!showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
          </button>
        </div>
        <div className="inputBox">
          <label htmlFor="cnfrmPassword">Confirm Password:</label>
          <input
            type={showConfirmPassword ? "text" : "password"}
            name="cnfrmPassword"
            id="cnfrmPassword"
            placeholder="********"
            value={registerDetails.cnfrmPassword}
            onChange={(e) => setRegisterDetails({...registerDetails, cnfrmPassword: e.target.value})}
          />
          <button
            className="showPasswordBtn"
            type="button"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          >
            {!showConfirmPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
          </button>
        </div>
        <div className="buttonBox">
          <button type="submit">
            <BiLogInCircle />
            <span>Sign up</span>
          </button>
        </div>
        <div className="bottomText">
          <div>Already have an account? <Link className="link" to='/login'>Login</Link></div>
        </div>
      </form>
    </div>
  );
};

export default Register;
