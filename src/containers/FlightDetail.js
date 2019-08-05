import React, { useState, useEffect, Fragment } from 'react';
import { observer } from 'mobx-react';

import styles from './FlightDetail.module.css';

import Header from '../components/Header';
import FlightInfo from '../components/FlightInfo';
import { getData } from '../services';

function FlightDetail(props) {
  const [details, setDetails] = useState([]);
  if (!localStorage.getItem('token')) {
    props.history.push('/');
  }
  useEffect(() => {
    const run = async() => {
      const data = await getData(`flights/${props.match.params.id}`);
      setDetails(data);
    };
    run();
  }, []);

  function openModal() {
    props.history.push(`/flightdetail/${props.match.params.id}/bookingmodal`);
  }

  if (details) {
    return (
      <div className="wrapper">
        <Header />
        <FlightInfo info={details.flight} />
        <button className={styles.booking} onClick={openModal}>Book now</button>
      </div>
    );
  }
  return (
    <Fragment>
      <Header />
      <div>Loading Flight details.</div>
    </Fragment>
  );

}

export default observer(FlightDetail);
