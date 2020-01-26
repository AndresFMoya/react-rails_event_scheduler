import { combineReducers } from 'redux';
import eventsReducer from './eventsReducer';

const rootReducer = combineReducers({
  events: eventsReducer,
});

export default rootReducer;
