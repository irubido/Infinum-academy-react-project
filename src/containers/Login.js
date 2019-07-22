import React, {useState} from 'react';
import { observer } from 'mobx-react';
import {Link} from 'react-router-dom';
import { useLocalStorage } from 'react-use';
import styles from './Login.module.css';
import { fetchData } from '../services/fetchData';
import { AppContext } from '../state/AppContext';

  const Login = () => {
    const { appState } = React.useContext(AppContext);
  const [token, setToken] = useLocalStorage('token','');
  const [name, setName] = useLocalStorage('name','');
  const [valueEmail, setValueEmail] = useState('');
  const [valuePassword, setValuePassword] = useState('');
  
  const fetchData = async (valueEmail,valuePassword) => {
    const res = await fetch('https://flighter-hw7.herokuapp.com/api/session', {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
        },
      body: JSON.stringify({
        "session": {
          "email": `${valueEmail}`,
          "password": `${valuePassword}`
        }
      })
    });
    const data = await res.json();

    
    console.log(data);
    if (data.session) {
    setToken(data.session.token);
    setName(data.session.user.first_name);
    console.log(data.session.token);
    }
  };


  
  function handleSubmit(event, appState) {
    event.preventDefault();
    console.log(valueEmail, valuePassword);
    fetchData(valueEmail, valuePassword);
    // servis--------------------------
    // fetchData('session', {
    //   method: "POST",
    //   headers: {
    //     "Accept": "application/json",
    //     "Content-Type": "application/json"
    //     },
    //   body: JSON.stringify({
    //     "session": {
    //       "email": `${valueEmail}`,
    //       "password": `${valuePassword}`
    //     }
    //   })
    // }).bind(null, appState);  

  }
  
  return(
    <div className={styles.logincontainer}>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-form">
          <input type="email" name="email" value={valueEmail} onChange={e => setValueEmail(e.target.value)} placeholder="Username" required ></input>
        </div>
        <div>
          <input type="password" name="password" value={valuePassword} onChange={e => setValuePassword(e.target.value)} placeholder="Password" required ></input>
        </div>
        <div>
          <input type="checkbox"></input>
          Remember me
        </div>
        <button className={styles.loginbutton}>Login</button>
      </form>
      <div className={styles.toregister}>
        <p>Don't have an account?</p>
        <p><Link to="/register">Register here</Link></p>
      </div>
    </div>

  )
}
export default observer(Login);