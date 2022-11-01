import React, { useState } from "react";
import profileImg from "./../img/avataaars.png";
import { BiLogInCircle } from "react-icons/bi";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const Register = () => {
  const [registerDetails, setRegisterDetails] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="loginPage">
      <form action="">
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
            placeholder="someone@email.com"
          />
        </div>
        <div className="inputBox">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="someone@email.com"
          />
        </div>
        <div className="inputBox">
          <label htmlFor="password">Password:</label>
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            id="password"
            placeholder="********"
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
          <div>Already have an account?</div>
        </div>
      </form>
    </div>
  );
};

export default Register;
