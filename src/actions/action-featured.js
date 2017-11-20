import axios from 'axios';

const CLIENT_ID = '7ptghi05mpeey2xrqytuwo9p0w3rgm';
const apiURL = 'https://api.twitch.tv/kraken/';

export function receiveFeatured(json) {
  return {type: 'RECEIVE_FEATURED', payload: json.data}
}

export function fetchFeatured() {
  return function(dispatch) {
      axios.get(`${apiURL}streams/featured/?client_id=${CLIENT_ID}`)
      .then(response => dispatch(receiveFeatured(response)))
      .catch(error => console.log('error is', error.response))
  }
}