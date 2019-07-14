import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

function Login() {

  useEffect(() => {
    fetchUsers();
  },[]);
  const [users, setUsers] = useState([]);
  const fetchUsers = async () => {
    const data = await fetch('https://flighter-hw7.herokuapp.com/api/users', {
      headers: {
        'Authorization': '3zE9DYLabN93eCUaH5gHeHhm',
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        }
    });
    const users = await data.json();
    console.log(users.users);
    setUsers(users.users);
    
  };

  return(
    <div className="login-container">
      <h1>Login</h1>
      <form>
        <div className="input-form">
          <input name="username" placeholder="Username"></input>
        </div>
        <div>
          <input name="password" placeholder="Password"></input>
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