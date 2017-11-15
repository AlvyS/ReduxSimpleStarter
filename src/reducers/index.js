import { combineReducers } from 'redux';
import ChannelsReducer from './reducer-channels';
import CurrentChannelReducer from './reducer-current-channel';

const combinedReducers = combineReducers({
  channels: ChannelsReducer
});

export default combinedReducers;