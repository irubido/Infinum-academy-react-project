import React from 'react';
import {Link} from 'react-router-dom';

function Login() {
  return(
    <div className="login-container">
      <h1>Login</h1>
      <form>
        <div className="input-form">
          <input placeholder="Username"></input>
        </div>
        <div>
          <input placeholder="Password"></input>
        </div>
        <div>
          <input type="checkbox"></input>
          Remember me
        </div>
      </form>
      <button className="login-button">Login</button>
      <div className="toregister">
        <p>Don't have an account?</p>
        <p><Link to="/register">Register here</Link></p>
      </div>
    </div>

  )
}
export default Login;