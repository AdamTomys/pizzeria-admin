import React from 'react';
import styles from './Tables.scss'
import {Link} from "react-router-dom";

function Tables() {
  return (
    <div className={styles.component}>
      <h2>Tables view</h2>
      <Link to={`/panel/tables/booking/first`}>Booking</Link>
      <Link to={`/panel/tables/event/second`}>Event</Link>
    </div>
  );
}

export default Tables;