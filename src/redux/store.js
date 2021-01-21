import {combineReducers, createStore} from 'redux';

import globalReducer from './globalRedux';

// define initial state and shallow-merge initial data
const initialState = {
};

// define reducers
const reducers = {
  global: globalReducer,
};

// add blank reducers for initial state properties without reducers
Object.keys(initialState).forEach(item => {
  if (typeof reducers[item] == 'undefined') {
    reducers[item] = (statePart = null) => statePart;
  }
});

// combine reducers
const storeReducer = combineReducers(reducers);

// merge all reducers with globalReducer
// const storeReducer = (state, action) => {
//   const modifiedState = globalReducer(state, action);
//   return combinedReducers(modifiedState, action);
// };

// create store
const store = createStore(
  storeReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
