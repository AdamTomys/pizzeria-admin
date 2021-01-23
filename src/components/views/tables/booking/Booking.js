import React from 'react';
import PropTypes from 'prop-types';
import styles from './Booking.scss'
import {connect} from "react-redux";

const Booking = ({id}) => (
    <div className={styles.component}>
        <h2>Booking view</h2>
        <h2>{id}</h2>
    </div>
)

Booking.propTypes = {
    id: PropTypes.node,
}

const mapStateToProps = (state, props) => ({
    id: props.match.params.id,
});

export default connect(mapStateToProps)(Booking);