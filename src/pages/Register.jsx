import React, { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import {auth} from "./../Firebase";
import profileImg from "./../img/avataaars.png";
import { BiLogInCircle } from "react-icons/bi";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const [registerDetails, setRegisterDetails] = useState({
    fullName: "",
    // userName: "",
    email: "",
    password: "",
    cnfrmPassword: "",
  });
  const [registerErrors, setRegisterErrors] = useState({
    fullName: "",
    // userName: "",
    email: "",
    password: "",
    cnfrmPassword: "",
    fireError: ""
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if(registerDetails.fullName.length <= 3){
      setRegisterErrors({
        ...registerErrors, fullName: 'Name must be greater than 3 characters!'
      })
    }
    else if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(registerDetails.email))){
      setRegisterErrors({
        ...registerErrors, email: 'Email not correct!', fullName: ''
      })
    }
    else if(registerDetails.password.length <= 5 || registerDetails.password.length >= 13){
      setRegisterErrors({
        ...registerErrors, password: 'Password must be 6 to 12 characters long!', email: ''
      })
    }
    else if(registerDetails.password !== registerDetails.cnfrmPassword){
      setRegisterErrors({
        ...registerErrors, cnfrmPassword: 'Password not correct!', password: ''
      })
    }
    else{
      createUserWithEmailAndPassword(auth, registerDetails.email, registerDetails.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        updateProfile(user, {
          displayName: registerDetails.fullName
        })
        setRegisterErrors({
          ...registerErrors, fireError: ''
        })
        navigate('/');
      })
      .catch((error) => {
        // const errorCode = error.code;
        // const errorMessage = error.message;
        setRegisterErrors({
          ...registerErrors, fireError: 'Oops something went wrong!', cnfrmPassword: ''
        })
      });
    }
  };

  return (
    <div className="loginPage">
      {/* <pre style={{color: 'white'}}>{JSON.stringify(registerDetails, undefined, 2)}</pre> */}
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
            onChange={(e) =>
              setRegisterDetails({
                ...registerDetails,
                fullName: e.target.value.trimStart().replace(/\s+/g, " "),
              })
            }
          />
          
        </div>
        <div className="error">{registerErrors.fullName == '' ? '' : registerErrors.fullName}</div>
        {/* <div className="inputBox">
          <label htmlFor="userName">Username:</label>
          <input
            type=""
            name="userName"
            id="userName"
            placeholder="johndoe1"
            value={registerDetails.userName}
            onChange={(e) =>
              setRegisterDetails({
                ...registerDetails,
                userName: e.target.value,
              })
            }
          />
        </div> */}
        <div className="inputBox">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="johndoe1@email.com"
            value={registerDetails.email}
            onChange={(e) =>
              setRegisterDetails({ ...registerDetails, email: e.target.value })
            }
          />
        </div>
        <div className="error">{registerErrors.email == '' ? '' : registerErrors.email}</div>
        <div className="inputBox">
          <label htmlFor="password">Password:</label>
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            id="password"
            placeholder="********"
            value={registerDetails.password}
            onChange={(e) =>
              setRegisterDetails({
                ...registerDetails,
                password: e.target.value,
              })
            }
          />
          <button
            className="showPasswordBtn"
            type="button"
            onClick={() => setShowPassword(!showPassword)}
          >
            {!showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
          </button>
        </div>
        <div className="error">{registerErrors.password == '' ? '' : registerErrors.password}</div>
        <div className="inputBox">
          <label htmlFor="cnfrmPassword">Confirm Password:</label>
          <input
            type={showConfirmPassword ? "text" : "password"}
            name="cnfrmPassword"
            id="cnfrmPassword"
            placeholder="********"
            value={registerDetails.cnfrmPassword}
            onChange={(e) =>
              setRegisterDetails({
                ...registerDetails,
                cnfrmPassword: e.target.value,
              })
            }
          />
          <button
            className="showPasswordBtn"
            type="button"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          >
            {!showConfirmPassword ? (
              <AiOutlineEye />
            ) : (
              <AiOutlineEyeInvisible />
            )}
          </button>
        </div>
        <div className="error">{registerErrors.cnfrmPassword == '' ? '' : registerErrors.cnfrmPassword}</div>
        <div className="buttonBox">
          <button type="submit">
            <BiLogInCircle />
            <span>Sign up</span>
          </button>
        </div>
        <div className="error">{registerErrors.fireError == '' ? '' : registerErrors.fireError}</div>
        <div className="bottomText">
          <div>
            Already have an account?{" "}
            <Link className="link" to="/login">
              Login
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
