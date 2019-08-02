import React from 'react';
import { observer } from 'mobx-react';
import { AppContext } from '../state/AppContext';
import styles from './BookingModal.module.css';
import { postBooking } from '../services/postBooking';
import useForm from 'react-hook-form';

 function BookingModal(props) {
  const { appState } = React.useContext(AppContext);
  const { register, handleSubmit, errors } = useForm();

  function closeModal() {
    props.history.push(`/flightdetail/${props.match.params.id}`);
  }

  async function confirmBooking(submitData) {
    appState.bookingResponse = await postBooking('bookings', submitData.booking, props.match.params.id);
    if(appState.bookingResponse.booking){
      alert(`Flight ${appState.bookingResponse.booking.flight.name} successfully booked for ${submitData.booking} seat/s`);
    }
  }
   return (
      <div className={styles.modalContainer}>
        <div className={styles.modalContent}>
          <h1>Create booking</h1>
          <form onSubmit={handleSubmit(confirmBooking)}>
          <input 
            type="text"
            name="booking"
            ref={register({
              validate: (value) => value < 11 || `Can't book more than 10 seats at once`,
            })}
            placeholder="How much seats?"
          />
          <div><p>{errors['booking'] && errors['booking'].message}</p></div>
          <button className={styles.button} type="submit">Confirm booking</button>
          </form>
          <button className={styles.button} onClick={closeModal} >Close</button>
        </div>
      </div>
  );
}

export default observer(BookingModal);