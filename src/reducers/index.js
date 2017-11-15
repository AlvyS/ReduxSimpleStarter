import { combineReducers } from 'redux';
import streamsReducer from './reducer-streams';

const combinedReducers = combineReducers({
  streams: streamsReducer
});

export default combinedReducers;