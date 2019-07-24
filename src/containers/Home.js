import React, {/* useState,*/ useEffect } from 'react';
import { observer } from 'mobx-react';
import { toJS } from 'mobx';
import Header from '../components/Header';
import Search from '../components/Search';
import Flights from '../components/Flights';
import { AppContext } from '../state/AppContext';
import { getFlights } from '../services/getFlights';

function Home() {
  const { appState } = React.useContext(AppContext);
  //useAsync(getFlights.bind(null, model, appState));
  
  useEffect(() => {
    if(localStorage.getItem('token')){
      const run = async () => {
        appState.flights = await getFlights('flights');
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