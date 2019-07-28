import React from 'react';
import { observer } from 'mobx-react';
import styles from './MyBookings.module.css';



const MyBookings = ({booking}) => {
  console.log(booking);
  
    return (
      <div className={styles.wrapper}>
        <h2>MY BOOKINGS</h2>
        <div className={styles.results} >
          {booking.map(x => (
            <div className={styles.item} key={x.id}>
              <div className={styles.image}>
                  <img src="https://source.unsplash.com/1600x900/?cities" alt="airplane" height="200px" width="100%"></img>
              </div>
              <div>{x.flight_name} {x.company_name}</div>
              <div>{x.flys_at}</div>
            </div>))}
        </div>
      </div>
    );
  
  
}
export default observer(MyBookings);