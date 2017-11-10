import { combineReducers } from 'redux';
import ChannelReducer from './reducer-channels';
import CurrentChannelReducer from './reducer-current-channel';

const combinedReducers = combineReducers({
  channels: ChannelReducer,
  currentChannel: CurrentChannelReducer
});

export default combinedReducers;