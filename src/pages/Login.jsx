import React, { useState, useContext } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase";
import profileImg from "./../img/avataaars.png";
import { BiLogInCircle } from "react-icons/bi";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
  });
  const [loginErrors, setLoginErrors] = useState({
    email: "",
    password: "",
    fireError: ""
  });

  const handleLogin = (e) => {
    e.preventDefault();

    if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(loginDetails.email))){
      setLoginErrors({
        ...loginErrors, email: 'Email not correct!'
      })
    }
    else if(loginDetails.password.length <= 5 || loginDetails.password.length >= 13){
      setLoginErrors({
        ...loginErrors, password: 'Password not correct!', email: ''
      })
    }
    else{
      signInWithEmailAndPassword(auth, loginDetails.email, loginDetails.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigate("/");
        setLoginErrors({
          ...loginErrors, fireError: ''
        })
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("user signed in error:");
        console.log(error);
        setLoginErrors({
          ...loginErrors, fireError: 'Oops something went wrong!', password: ''
        })
      });
    }
  };

  return (
    <div className="loginPage">
        <form action="" onSubmit={handleLogin}>
        <div className="heading">
          <div>Login</div>
        </div>
        <div className="profileImg">
          <img src={profileImg} width="100%" alt="" />
        </div>
        <div className="inputBox">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="someone@email.com"
            value={loginDetails.email}
            onChange={(e) =>
              setLoginDetails({ ...loginDetails, email: e.target.value })
            }
          />
        </div>
        <div className="error">{loginErrors.email == '' ? '' : loginErrors.email}</div>
        <div className="inputBox">
          <label htmlFor="password">Password:</label>
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            id="password"
            placeholder="********"
            value={loginDetails.password}
            onChange={(e) =>
              setLoginDetails({ ...loginDetails, password: e.target.value })
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
        <div className="error">{loginErrors.password == '' ? '' : loginErrors.password}</div>
        <div className="buttonBox">
          <button type="submit">
            <BiLogInCircle />
            <span>Login</span>
          </button>
        </div>
        <div className="error">{loginErrors.fireError == '' ? '' : loginErrors.fireError}</div>
        <div className="bottomText">
          <div>
            Don't have an account?{" "}
            <Link className="link" to="/register">
              Register
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
