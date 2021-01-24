import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from "redux-devtools-extension";
import productReducer from './productRedux';

// define initial state and shallow-merge initial data
const initialState = {
  products: {
    loading: {
      active: false,
      error: false,
    },
    data: [],
  },
};

// define reducers
const reducers = {
  products: productReducer,
};

// add blank reducers for initial state properties without reducers
Object.keys(initialState).forEach(item => {
  if (typeof reducers[item] == 'undefined') {
    reducers[item] = (statePart = null) => statePart;
  }
});

// combine reducers
const storeReducer = combineReducers(reducers);

// create store
const store = createStore(
  storeReducer,
  initialState,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
);

export default store;
