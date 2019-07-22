import React from 'react';
import { observer } from 'mobx-react';
import styles from './Flights.module.css';
import { Link } from 'react-router-dom';

const Flights = ({flights}) => {
  //console.log(flights.flights);
  if(flights.flights){
    return (
      
      <div className={styles.flightscontainer}>
      <div className={styles.results}>RESULTS</div>
      <div className={styles.flights}>
          {flights.flights.map(x => (
            <Link to={`flightdetail/${x.id}`} key={x.id}>
              <div className={styles.flightitem} key={x.id}>
                <div className={styles.threedots}>
                  <div><strong>...</strong></div>
                </div>
                <div className={styles.image}>
                  <img src="https://source.unsplash.com/1600x900/?airplane,flight" alt="airplane" height="200px" width="100%"></img>
                </div>
                <div className={styles.flightsummary}>
                  <h4>Departs at {(x.flys_at).substring(11,16)}</h4>
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
  } else{
    return(
      <div>Login to get flights.</div>
    );
  }
  
}
export default observer(Flights);