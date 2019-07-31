import React from 'react';
import { observer } from 'mobx-react';
import {Link} from 'react-router-dom';
import styles from './Header.module.css';
import { appState } from '../state/AppState';

function Header(props) {

  function logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('name');
    localStorage.removeItem('profileId');
    window.location.reload();
    props.history.push("/");
  }

  if (localStorage.getItem('token')){
    return(
      <div className={styles.header}>
        <Link to={`/profile/${localStorage.getItem('profileId')}`}><div className={styles.name}>Hi, {appState.name}!</div></Link>
        <button onClick={logout}>Logout</button>
      </div>
    );
  }else{
    return(
      <div className={styles.header}>
        <Link to="/login"><button>Login</button></Link>
        <Link to="/register"><button>Register</button></Link>
      </div>
    );
  }
  
}
export default observer(Header);