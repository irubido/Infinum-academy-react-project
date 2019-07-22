import React from 'react';
import { observer } from 'mobx-react';
import { AppContext } from '../state/AppContext';
import { toJS } from 'mobx';
import styles from './BookingModal.module.css';

 function BookingModal(props) {
  const { appState } = React.useContext(AppContext);


  const fetchData = async (valueSeats) => {
    const res = await fetch('https://flighter-hw7.herokuapp.com/api/bookings', {
      method: "POST",
      headers: {
        "Authorization": `${(localStorage.getItem('token')) ? (localStorage.getItem('token')).slice(1, -1) : 'abc'}`,
        "Accept": "application/json",
        "Content-Type": "application/json"
        },
      body: JSON.stringify({
        "booking": {
          "no_of_seats": `${valueSeats}`,
          "flight_id": `${props.match.params.id}`
        }
      })
    });
    appState.bookingResponse = await res.json();
    const x = toJS(appState.bookingResponse);
    console.log(x);
  };

   function closeModal() {
    props.history.push(`/flightdetail/${props.match.params.id}`);
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(appState.booking);
    fetchData(appState.booking);
  }
  function onInputChange(e) {
    appState.booking = e.target.value;
  }
   return (
    
      <div className={styles.modalContainer}>
        <div className={styles.modalContent}>
          <h1>Create booking</h1>
          <input 
          value={appState.booking}
          type="text"
          placeholder="How much seats?"
          onChange={onInputChange}
          />
          <button className={styles.button} onClick={handleSubmit}>Confirm booking</button>
          <button className={styles.button} onClick={closeModal} >Close</button>
        </div>
      </div>
  );
}

export default observer(BookingModal);