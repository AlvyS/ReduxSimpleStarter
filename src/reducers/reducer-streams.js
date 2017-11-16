// const initialStreamerNames = ['truztout', 'biwwie', 'nl_krippi']
import { RECEIVE_STREAMER } from '../actions/actions';

const initialState = {
  channels: []
}

const streamsReducer = (state=initialState, action) => {
  switch (action.type) {
    case RECEIVE_STREAMER: 
      return {...state, 
        channels: [...state.channels, action.payload.stream.channel]
      }
      break;
    default:
      return state;
  }
}

export default streamsReducer;