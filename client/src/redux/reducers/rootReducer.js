import { combineReducers } from 'redux';
import eventsReducer from './eventsReducer';
import authReducer from './authReducer';
import followReducer from './followReducer';

const rootReducer = combineReducers({
  events: eventsReducer,
  auth: authReducer,
  follow: followReducer,
});

export default rootReducer;
