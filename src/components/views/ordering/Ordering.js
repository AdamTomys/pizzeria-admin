import React from 'react';
import styles from './Ordering.scss'
import {Link} from "react-router-dom";

function Ordering() {
  return (
    <div className={styles.component}>
      <h2>Ordering view</h2>
      <Link to={`/panel/ordering/order/123`}>Order</Link>
      <Link to={`/panel/ordering/new`}>New order</Link>
    </div>
  );
}

export default Ordering;