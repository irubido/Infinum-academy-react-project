import React, {/* useState,*/ useEffect } from 'react';
import { observer } from 'mobx-react';
import { toJS } from 'mobx';
import Header from '../components/Header';
import Search from '../components/Search';
import Flights from '../components/Flights';
import { AppContext } from '../state/AppContext';
import { getData } from '../services/getData';

function Home() {
  const { appState } = React.useContext(AppContext);
  
  useEffect(() => {
    if(localStorage.getItem('token')){
      const run = async () => {
        appState.flights = await getData('flights');
      }
      run();
    }
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