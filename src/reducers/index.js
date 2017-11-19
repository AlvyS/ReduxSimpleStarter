import { combineReducers } from 'redux';
import streamsReducer from './reducer-streams';
import featuredReducer from './reducer-featured';

const combinedReducers = combineReducers({
  streams: streamsReducer,
  featured: featuredReducer
});

export default combinedReducers;