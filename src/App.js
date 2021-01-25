import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import MainLayout from './components/layout/MainLayout/MainLayout';
import Dashboard from './components/views/dashboard/Dashboard';
import Login from './components/views/login/Login';
import Event from './components/views/tables/event/Event';
import Ordering from './components/views/ordering/Ordering';
import Order from './components/views/ordering/order/Order';
import NewOrder from './components/views/ordering/newOrder/NewOrderContainer';
import Kitchen from './components/views/kitchen/Kitchen';
import Booking from './components/views/tables/booking/Booking';
import Tables from './components/views/tables/Tables';

function App() {
  return (
    <BrowserRouter basename={'/panel'}>
      <MainLayout>
        <Switch>
          <Route exact path={`${process.env.PUBLIC_URL}/`} component={Dashboard}/>
          <Route exact path={process.env.PUBLIC_URL + '/login'} component={Login}/>
          <Route exact path={`${process.env.PUBLIC_URL}/tables`} component={Tables}/>
          <Route exact path={`${process.env.PUBLIC_URL}/tables/booking/:id`} component={Booking}/>
          <Route exact path={`${process.env.PUBLIC_URL}/tables/event/:id`} component={Event}/>
          <Route exact path={`${process.env.PUBLIC_URL}/ordering`} component={Ordering}/>
          <Route exact path={`${process.env.PUBLIC_URL}/ordering/new`} component={NewOrder}/>
          <Route exact path={`${process.env.PUBLIC_URL}/ordering/order/:id`} component={Order}/>
          <Route exact path={`${process.env.PUBLIC_URL}/kitchen`} component={Kitchen}/>
        </Switch>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
