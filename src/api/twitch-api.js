import axios from 'axios';


const CLIENT_ID = '7ptghi05mpeey2xrqytuwo9p0w3rgm';
const apiURL = 'https://api.twitch.tv/kraken/';

export function fetchStreams(streams) {
  return function(dispatch) {
    let streams = 'voyboy';
    axios.get(`${apiURL}streams/${streams}/?client_id=${CLIENT_ID}`)
      .then((response) => {
        dispatch({type: 'FETCHING_STREAM', payload: response.data})
        dispatch({type: 'UPDATING_CHANNELS', payload: response.data})
    })
  }
}

// export function updateChannels(channel) {
//   return function(dispatch) {
//     axios.get(`${apiURL}channels/${streams}/?client_id=${CLIENT_ID}`)
//       .then((response) => {
//         dispatch({type: 'UPDATING_CHANNELS', payload: response.data})
//     })
//   }
// }