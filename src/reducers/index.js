// src/reducers/index.js
import { combineReducers } from 'redux';

// Reducers
const counterInitialState = {
  counter: 0,
};

const counterReducer = (state = counterInitialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, counter: state.counter + 1 };
    case 'DECREMENT':
      return { ...state, counter: state.counter - 1 };
    default:
      return state;
  }
};

const sessionInitialState = {
  isLoggedIn: false,
  user: null,
  token : null,
};

const sessionReducer = (state = sessionInitialState,action) =>{

}

// Combine Reducers
const rootReducer = combineReducers({
  counter: counterReducer,
//   session: sessionReducer
  // Add other reducers here if you have more
});

export default rootReducer;