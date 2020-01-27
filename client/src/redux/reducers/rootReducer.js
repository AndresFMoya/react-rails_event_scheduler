import { combineReducers } from 'redux';
import eventsReducer from './eventsReducer';
import authReducer from './authReducer';

const rootReducer = combineReducers({
  events: eventsReducer,
  auth: authReducer,
});

export default rootReducer;
