import React from 'react';
import profileImg from './../img/avataaars.png';
import { BiLogInCircle } from 'react-icons/bi';

const Login = () => {
  return (
    <div className='loginPage'>
      <form action="">
        <div className='heading'>
          <div>Login</div>
        </div>
        <div className='profileImg'>
          <img src={profileImg} width='100%' alt="" />
        </div>
        <div className='inputBox'>
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" id="email" placeholder='someone@email.com' />
        </div>
        <div className='inputBox'>
          <label htmlFor="password">Password:</label>
          <input type="password" name="password" id="password" placeholder='********' />
        </div>
        <div className='buttonBox'>
          <button type="submit">
            <BiLogInCircle />
            <span>Login</span>
          </button>
        </div>
        <div className='bottomText'>
          <div>Don't have an account?</div>
        </div>
      </form>
    </div>
  )
}

export default Login