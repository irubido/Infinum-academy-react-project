import React from 'react';
import styles from './Search.module.css';

function Search() {
  return(
    <div className={styles.searccontainer}>
      <h1>Find best flight for you and your friends!</h1>
      <div className={styles.search}>
        <div className={styles.searchitem}>01.FEB 2019</div>
        <div className={styles.searchitem}>AMSTERDAM</div>
        <div className={styles.searchitem}>4 PEOPLE</div>
        <div className={styles.searchbutton}>SEARCH</div>
      </div>
    </div>
  )
}
export default Search;