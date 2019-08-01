import React from 'react';
import { observer } from 'mobx-react';
import styles from './Flights.module.css';
import { Link } from 'react-router-dom';
import { appState } from '../state/AppState';
import formatTime from '../services/formatTime';

const Flights = () => {
    if(appState.filteredFlights){
      return (
        <div className={styles.flightscontainer}>
        <div className={styles.results}>RESULTS</div>
        <div className={styles.flights}>
            {appState.filteredFlights.map(x => (
              <Link to={`flightdetail/${x.id}`} key={x.id}>
                <div className={styles.flightitem} key={x.id}>
                  <div className={styles.threedots}>
                    <div><strong>...</strong></div>
                  </div>
                  <div className={styles.image}>
                    <img src="https://source.unsplash.com/1600x900/?airplane,flight" alt="airplane" height="200px" width="100%"></img>
                  </div>
                  <div className={styles.flightsummary}>
                    <h4>{x.name}</h4>
                    <h4>Departs at {formatTime(x.flys_at)}</h4>
                    <p>{x.company_name}</p>
                    <p>*** | {x.no_of_seats - x.no_of_booked_seats} tickets available</p>
                    <p>Price <span className={styles.price}>{x.current_price}$</span></p>
                  </div>
                </div>
              </Link>
            ))}
        </div>
        </div>
      );
    }
  } 
  

export default observer(Flights);