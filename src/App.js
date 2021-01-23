import React from 'react';
import {connect} from 'react-redux';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import PropTypes from 'prop-types';

import MainLayout from './components/layout/MainLayout/MainLayout';
import Dashboard from './components/views/dashboard/Dashboard';
import Login from './components/views/login/Login';
import Event from './components/views/tables/event/Event';
import Ordering from './components/views/ordering/Ordering';
import Order from './components/views/ordering/order/Order';
import NewOrder from './components/views/ordering/newOrder/NewOrder';
import Kitchen from './components/views/kitchen/Kitchen';
import Booking from './components/views/tables/booking/Booking';
import Tables from './components/views/tables/Tables';

class App extends React.Component {
  static propTypes = {
    trips: PropTypes.string,
  }

  render(){
      const trips = this.state;
    return (
        <BrowserRouter basename={'/panel'}>
          <MainLayout>
            <Switch>
                <Route exact path={`${process.env.PUBLIC_URL}/`} component={Dashboard} />
                <Route exact path={process.env.PUBLIC_URL + '/login'} component={Login} />
                <Route exact path={`${process.env.PUBLIC_URL}/tables`} component={Tables} />
                <Route exact path={`${process.env.PUBLIC_URL}/tables/booking/:id`} component={Booking} />
                <Route exact path={`${process.env.PUBLIC_URL}/tables/event/:id`} component={Event} />
                <Route exact path={`${process.env.PUBLIC_URL}/ordering`} component={Ordering} />
                <Route exact path={`${process.env.PUBLIC_URL}/ordering/new`} component={NewOrder} />
                <Route exact path={`${process.env.PUBLIC_URL}/ordering/order/:id`} component={Order} />
                <Route exact path={`${process.env.PUBLIC_URL}/kitchen`} component={Kitchen} />
            </Switch>
              <h1>{trips}</h1>
          </MainLayout>
        </BrowserRouter>
    );
  }
}

const mapStateToProps = state => ({
  trips: state.trips,
});

export default connect(mapStateToProps)(App);
