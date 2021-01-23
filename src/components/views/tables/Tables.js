import React from 'react';
import PropTypes from 'prop-types';
import styles from './Tables.scss'
import {Link} from "react-router-dom";

const Tables = () => (
    <div className={styles.component}>
        <h2>Tables view</h2>
        <Link to={`/panel/tables/booking/first`}>Booking</Link>
        <Link to={`/panel/tables/event/second`}>Event</Link>
    </div>
)

export default Tables;