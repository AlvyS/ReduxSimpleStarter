// Action Creator, 'Broadcaster'. Defines what type to listen for, sends payload/data.
import axios from 'axios';

const CLIENT_ID = '7ptghi05mpeey2xrqytuwo9p0w3rgm';
const apiURL = 'https://api.twitch.tv/kraken/';

export const RECEIVE_STREAMER = 'RECEIVE_STREAMER';
function receiveStreamer(json) {
  return {type: RECEIVE_STREAMER, payload: json.data}
}

export function fetchStreams(streams) {
  return function(dispatch) {
    for(let i=0; i < streams.length; i++) {
      axios.get(`${apiURL}streams/${streams[i]}/?client_id=${CLIENT_ID}`)
      .then(response => dispatch(receiveStreamer(response)))
    }
  }
}
