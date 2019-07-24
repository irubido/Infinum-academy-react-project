import React, {/* useState,*/ useEffect, Fragment } from 'react';
import { observer } from 'mobx-react';
import { toJS } from 'mobx';
import Header from '../components/Header';
import { AppContext } from '../state/AppContext';
import styles from './FlightDetail.module.css';
import FlightInfo from '../components/FlightInfo';
import { getFlights } from '../services/getFlights';

function FlightDetail( props ){
  const { appState } = React.useContext(AppContext);

  useEffect(() => {
      const run = async () => {
        appState.flight = await getFlights(`flights/${props.match.params.id}`);
      }
      run();
   }, []);

  const details = toJS(appState.flight.flight);

  function openModal(){
      props.history.push(`/flightdetail/${props.match.params.id}/bookingmodal`);
  }

  if(appState.flight.flight){
    return (
      <div className="wrapper">
      <Header />
      <FlightInfo info={details}/>
      <button className={styles.booking} onClick={openModal}>Book now</button>
      </div>
      
    );
  } else{
    return(
      <Fragment>
      <Header />
      <div>Loading Flight details.</div>
      </Fragment>
    );
  }
}

export default observer(FlightDetail);