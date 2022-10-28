import React from 'react';
import profileImg from './../img/avataaars.png'

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
          <button type="submit">Login</button>
        </div>
        <div>
          <div>Don't have an account?</div>
        </div>
      </form>
    </div>
  )
}

export default Login