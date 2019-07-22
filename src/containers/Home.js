import React, {/* useState,*/ useEffect } from 'react';
import { observer } from 'mobx-react';
import { toJS } from 'mobx';
import Header from '../components/Header';
import Search from '../components/Search';
import Flights from '../components/Flights';
import { AppContext } from '../state/AppContext';

function Home() {
  const { appState } = React.useContext(AppContext);

  const fetchData = async () => {
    const res = await fetch('https://flighter-hw7.herokuapp.com/api/flights', {
      method: "GET",
      headers: {
        "Authorization": `${(localStorage.getItem('token')) ? (localStorage.getItem('token')).slice(1, -1) : 'abc'}`,
        "Accept": "application/json",
        "Content-Type": "application/json"
        },
    });
    appState.flights = await res.json();
  }

  useEffect(() => {
    fetchData();
  }, []);

return (
  <div className="wrapper">
          <Header />
          <Search />
          <Flights flights={toJS(appState.flights)}/>
  </div>
  );
}


export default observer(Home);