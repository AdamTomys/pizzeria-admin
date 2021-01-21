import React from 'react';
import {connect} from 'react-redux';
// import {BrowserRouter} from 'react-router-dom';
import PropTypes from 'prop-types';

import MainLayout from './components/layout/MainLayout/MainLayout';

import {setMultipleStates} from './redux/globalRedux';
// import {AnimatedSwitch} from 'react-router-transitioner';

class App extends React.Component {
  static propTypes = {
    trips: PropTypes.array,
    setStates: PropTypes.func,
  }

  // constructor(props){
  //   super(props);
  //   // parse trips when App is first created
  //   parseTrips(this.props.trips, this.props.setStates);
  // }

  // componentDidUpdate(prevProps){
  //   if(prevProps.trips != this.props.trips){
  //     // parse trips again if they changed
  //     parseTrips(this.props.trips, this.props.setStates);
  //   }
  // }

  render(){
    return (
        <MainLayout/>
    );
  }
}

const mapStateToProps = state => ({
  trips: state.trips,
});

const mapDispatchToProps = dispatch => ({
  setStates: newState => dispatch(setMultipleStates(newState)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
