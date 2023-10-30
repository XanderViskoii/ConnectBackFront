import React from 'react';
import '../index.css';

function LoginForm() {
    return (
      <div className="bodyalt">
        <div className="head">CAMEO</div>
        <div className="wrap-up">
          <h1>Sign In</h1>
          <form action="">
            <div className="input-box">
              <input type="text" name="" id="" placeholder="Username" required aria-required="true" />
              <i className="bx bxs-user"></i>
            </div>
            <div className="input-box">
              <input type="password" name="" id="" placeholder="Password" required aria-required="true" />
              <i className="bx bxs-lock-alt"></i>
            </div>
            <div className="remember-forgot">
              <label>
                <input type="checkbox" /> Remember me
              </label>
              <a href="#">Forgot password?</a>
            </div>
            <button className="btn" type="submit">Login</button>
            <div className="register-link">
              <p>Don't have an account?<a href="/Register" target="_blank">Register</a></p>
            </div>
          </form>
        </div>
      </div>
    );
  }
  
  export default LoginForm;
  

