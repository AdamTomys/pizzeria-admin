import React from 'react';
import {NavLink, Link} from 'react-router-dom';
import styles from './Header.scss';
import { Grid, Row, Col } from 'react-flexbox-grid';

class Header extends React.Component {
  render(){
    return (
      <header className={styles.component}>
        <h1>Pizzeria Admin Panel</h1>
      </header>
    );
  }
}

export default Header;
