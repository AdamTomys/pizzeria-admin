import React from 'react';
import PropTypes from 'prop-types';
import styles from './Event.scss'
import {connect} from "react-redux";

const Event = ({id}) => (
    <div className={styles.component}>
        <h2>Event view</h2>
        <h2>{id}</h2>
    </div>
)

Event.propTypes = {
    id: PropTypes.node,
}

const mapStateToProps = (state, props) => ({
    id: props.match.params.id,
});

export default connect(mapStateToProps)(Event);