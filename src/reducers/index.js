import { combineReducers } from 'redux';
import channelReducer from './reducer-channels';

const combinedReducers = combineReducers({
  channels: channelReducer
});

export default combinedReducers;
