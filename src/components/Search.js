import React from 'react';
import { observer } from 'mobx-react';
import styles from './Search.module.css';
import { AppContext } from '../state/AppContext';

function Search() {
  const { appState } = React.useContext(AppContext);
  function onFilterChange(e) {
    appState.flightFilter = e.target.value;
  }
  return(
    <div className={styles.searchContainer}>
      <h1>Find best flight for you and your friends!</h1>
      <div className={styles.search}>
      <input
        className={styles.item}
        value={appState.flightFilter}
        onChange={onFilterChange}
        type="text"
        placeholder="Search flights..."
      />
      </div>
    </div>
  )
}
export default observer(Search);