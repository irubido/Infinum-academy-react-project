import React from 'react';
import { observer } from 'mobx-react';
import { AppContext } from '../state/AppContext';
import { toJS } from 'mobx';
import styles from './BookingModal.module.css';
import { postBooking } from '../services/postBooking';

 function BookingModal(props) {
  const { appState } = React.useContext(AppContext);

   function closeModal() {
    props.history.push(`/flightdetail/${props.match.params.id}`);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    appState.bookingResponse = await postBooking('bookings', appState.booking, props.match.params.id);
    console.log(toJS(appState.bookingResponse));
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