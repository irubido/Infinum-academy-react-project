import React, {/* useState,*/ useEffect } from 'react';
import { useAsync } from 'react-use';
import { observer } from 'mobx-react';
import Header from '../components/Header';
import Search from '../components/Search';
import Flights from '../components/Flights';
import { AppContext } from '../state/AppContext';
import { loadFlights } from '../services/loadFlights';

function Home() {
  const { appState } = React.useContext(AppContext);
  useAsync(loadFlights.bind(null, appState));

  function onFilterChange(e) {
    appState.flightFilter = e.target.value;
  }

  if(localStorage.getItem('token')){
    return (
      <div className="wrapper">
              <Header />
              <Search />
              <input
                className="search"
                value={appState.flightFilter}
                onChange={onFilterChange}
                type="text"
                placeholder="Search flights..."
              />
              <Flights />
      </div>
      );
  }else{
    return (
      <div className="wrapper">
              <Header />
              <Search />
              <input
                className="search"
                value={appState.flightFilter}
                onChange={onFilterChange}
                type="text"
                placeholder="Search flights..."
              />
              <div>Login to get flights</div>
      </div>
      );
  }
}

export default observer(Home);