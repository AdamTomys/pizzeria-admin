import React from 'react';
import PropTypes from 'prop-types';
import styles from './Order.scss'
import {connect} from 'react-redux';

const Order = ({id}) => (
    <div className={styles.component}>
        <h2>Order view</h2>
        <h2>{id}</h2>
    </div>
)

Order.propTypes = {
    id: PropTypes.node,
}

const mapStateToProps = (state, props) => ({
    id: props.match.params.id,
});

export default connect(mapStateToProps)(Order);