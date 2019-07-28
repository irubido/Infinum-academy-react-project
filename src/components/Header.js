import React from 'react';
import { observer } from 'mobx-react';
import {Link} from 'react-router-dom';
import styles from './Header.module.css';

function Header() {
  
  if (localStorage.getItem('token') && localStorage.getItem('token').length > 3){
    return(
      <div className={styles.header}>
        <Link to={`/profile/${localStorage.getItem('profileId')}`}><div className={styles.name}>Hi, {localStorage.getItem('name').slice(1, -1)}!</div></Link>
        <button>Logout</button>
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