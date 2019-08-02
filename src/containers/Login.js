import React from 'react';
import { observer } from 'mobx-react';
import {Link} from 'react-router-dom';
import styles from './Login.module.css';
import { postLogin } from '../services/postLogin';
import { AppContext } from '../state/AppContext';
import useForm from 'react-hook-form';

  const Login = (props) => {
    const { register, handleSubmit, errors } = useForm();
    const { appState } = React.useContext(AppContext);
  
    async function onLogin(submitData) {

      const data = await postLogin('session', submitData.email, submitData.password);

      if(data.session){
        localStorage.setItem('profileId', data.session.user.id);
        localStorage.setItem('token', data.session.token);
        localStorage.setItem('name', data.session.user.first_name);
        appState.name = data.session.user.first_name;
        props.history.push("/");
      }else{
        alert('Incorrect email or password!');
      }
    }
  
    return(
      <div className={styles.logincontainer}>
        <h1>Login</h1>
        <form onSubmit={handleSubmit(onLogin)}>
          <div className="input-form">
            <input type="email" name="email" ref={register} placeholder="Username" required />
          </div>
          <div>
            <input type="password" name="password" ref={register} placeholder="Password" required />
          </div>
          <button type="submit" className={styles.loginbutton}>Login</button>
        </form>
        <div className={styles.toregister}>
          <p>Don't have an account?</p>
          <p><Link to="/register">Register here</Link></p>
        </div>
      </div>
    )
  }
export default observer(Login);