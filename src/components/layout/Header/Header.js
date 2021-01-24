import React from 'react';
import styles from './Header.scss';

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
