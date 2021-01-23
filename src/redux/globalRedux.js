/* SELECTORS */


/* ACTIONS */

// action name creator
const reducerName = 'global';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const SET_STRING = createActionName('SET_STRING');

// action creators
export const setMultipleStates = payload => ({ payload, type: SET_STRING });

// reducer
export default function reducer(state = [], action = {}) {
  console.log(state);
  switch (action.type) {
    case SET_STRING: {
      return {
        ...state,
        ...action.payload,
      };
    }
    default:
      return state;
  }
}
