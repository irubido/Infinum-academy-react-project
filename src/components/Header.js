import React from 'react';
import { observer } from 'mobx-react';
import {Link} from 'react-router-dom';
import styles from './Header.module.css';
import { AppContext } from '../state/AppContext';

function Header(props) {
  
  const { appState } = React.useContext(AppContext);

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
        <Link to={"/"}><div className={styles.home}>HOME</div></Link>
        <div className={styles.links}>
        <Link to={`/profile/${localStorage.getItem('profileId')}`}><div className={styles.name}>Hi, {appState.name}!</div></Link>
        <button onClick={logout}>Logout</button>
        </div>
      </div>
    );
  }else{
    return(
      <div className={styles.header}>
        <div></div>
        <div className={styles.links}>
          <Link to="/login"><button>Login</button></Link>
          <Link to="/register"><button>Register</button></Link>
        </div>
      </div>
    );
  }
}
export default observer(Header);