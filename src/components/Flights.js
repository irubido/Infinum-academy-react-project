import React, {useState, useEffect} from 'react';
import styles from './Flights.module.css';
import { observer } from 'mobx-react';
import { appState } from '../state/AppState';

const Flights = () => {
  const[item, setItem] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
        const res = await fetch('https://flighter-hw7.herokuapp.com/api/flights', {
          method: "GET",
          headers: {
            "Authorization": `${(localStorage.getItem('token')).slice(1, -1)}`,
            "Accept": "application/json",
            "Content-Type": "application/json"
            },
        });
        const data = await res.json();
        // appState.flights = await res.json();
        // console.log(appState.flights);
        setItem(data.flights);
    };
    fetchData();
  }, []);

  return (
    <div className={styles.flightscontainer}>
    <div className={styles.results}>RESULTS</div>
    <div className={styles.flights}>
        {item.filter(x => x.no_of_seats>x.no_of_booked_seats).map(x => (
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
          
        ))}
    </div>
    </div>
  );

}

export default observer(Flights);