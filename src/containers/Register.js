import React, {useState} from 'react';
import { observer } from 'mobx-react';
import styles from './Login.module.css';
//import { appState } from '../state/AppState';
function Register() {
  
  const [valueEmail, setValueEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [valuePassword, setValuePassword] = useState('');
  const [valuePassword2, setValuePassword2] = useState('');
  
  const fetchData = async (email, fullName, password) => {
    const fullNameArray = fullName.split(' ')
    const res = await fetch('https://flighter-hw7.herokuapp.com/api/users', {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
        },
      body: JSON.stringify({
        "user": {
          "email": `${email}`,
          "first_name": `${fullNameArray[0]}`,
          "last_name": `${fullNameArray[1]}`,
          "password": `${password}`
        }
      })
    });
    const data = await res.json();
    console.log(data);
    };
  

  function handleSubmit(event) {
    event.preventDefault();
    console.log(valueEmail,fullName, valuePassword);
    fetchData(valueEmail,fullName,valuePassword);
  }

  return(
    <div className={styles.logincontainer}>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-form">
        <input type="text" name="fullName" onChange={e => setFullName(e.target.value)} value={fullName} placeholder="Full name" required ></input>
        </div>
        <div>
        <input type="email" name="email" onChange={e => setValueEmail(e.target.value)} value={valueEmail} placeholder="Email" required ></input>
        </div>
        <div>
        <input type="password" name="password" onChange={e => setValuePassword(e.target.value)} value={valuePassword} placeholder="Password" required ></input>
        </div>
        <div>
        <input type="password" name="password2" onChange={e => setValuePassword2(e.target.value)} value={valuePassword2} placeholder="Confirm Password" required ></input>
        </div>
        <button className={styles.loginbutton}>Register</button>
      </form>
      
      
    </div>
  )
}
export default observer(Register);