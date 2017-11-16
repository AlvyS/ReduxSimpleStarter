import axios from 'axios';


const CLIENT_ID = '7ptghi05mpeey2xrqytuwo9p0w3rgm';
const apiURL = 'https://api.twitch.tv/kraken/';


export function fetchStreams(streams) {
  return function(dispatch) {
    for(let i in streams) {
      axios.get(`${apiURL}streams/${streams[i]}/?client_id=${CLIENT_ID}`)
      .then((response) => {
        dispatch({type: 'FETCHING_STREAM', payload: response.data})
      })
    }
  }
}