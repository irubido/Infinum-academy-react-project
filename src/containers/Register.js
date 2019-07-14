import React from 'react';

function Register() {
  return(
    <div className="register-container">
      <h1>Register</h1>
      <form>
        <div className="input-form">
          <input  placeholder="Full name"></input>
        </div>
        <div>
          <input placeholder="Email"></input>
        </div>
        <div>
          <input placeholder="Password"></input>
        </div>
        <div>
          <input placeholder="Confirm password"></input>
        </div>
      </form>
      <button className="login-button">Register</button>
      
    </div>
  )
}
export default Register;