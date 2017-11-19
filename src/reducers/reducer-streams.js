// import { RECEIVE_STREAMER } from '../actions/actions';

const initialState = {
  streamerName: ['solary', 'truztout', 'yoda'],
  channels: []
}

const streamsReducer = (state=initialState, action) => {
  switch (action.type) {
    case 'RECEIVE_STREAMER': 
      return {...state, 
        channels: [...state.channels, action.payload.stream.channel]
      }
      break;
    case 'ADD_STREAMER':
      return {...state, streamerName: [...state.streamerName, action.payload]}
      break;
    default:
      return state;
  }
}

export default streamsReducer;