import React from 'react';
import {Link} from 'react-router-dom';
import styles from './Header.module.css';

function Header() {
  return(
    <div className={styles.header}>
      <Link to="/login"><button>Login</button></Link>
      <Link to="/register"><button>Register</button></Link>
    </div>
  )
}
export default Header;