import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header/Header';
import PageNav from '../PageNav';

const MainLayout = ({children}) => (
  <div>
      <PageNav/>
    <Header />
    <main>
      {children}
    </main>
  </div>
);

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
