import React from 'react';
import { useAsync } from 'react-use';
import { observer } from 'mobx-react';

import Header from '../components/Header';
import Search from '../components/Search';
import Flights from '../components/Flights';
import { AppContext } from '../state/AppContext';
import { loadFlights } from '../services';

function Home() {

  const { appState } = React.useContext(AppContext);
  useAsync(loadFlights.bind(null, appState));

  if (localStorage.getItem('token')) {
    return (
      <div className="wrapper">
        <Header />
        <Search />
        <Flights />
      </div>
    );
  }
  return (
    <div className="wrapper">
      <Header />
      <Search />
      <div><h1>Login to get flights</h1></div>
    </div>
  );

}

export default observer(Home);
