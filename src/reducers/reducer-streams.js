// const initialStreamers = ['truztout', 'biwwie', 'nl_krippi']

const initialState = {
  streamers: '',
  channels: [],
}

const streamsReducer = (state=initialState, action) => {
  switch (action.type) {

    case 'FETCHING_STREAMS': {
      return {...state, streamers: action.payload.stream.channel.name }
      break;
    }
    case 'UPDATING_CHANNELS':
      return {...state, channels: [...state, action.payload.stream.channel]}
      break;
      
    case 'ADD_STREAMER': {
      return {...state, streamers}
      break;
    }
    
    default:
    return state;
  }
}

export default streamsReducer;