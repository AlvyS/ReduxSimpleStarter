import React from 'react';
import ChannelList from '../containers/channel-list';
import ChannelDetails from '../containers/channel-details';


const App = () => (
  <div>
    <h1> List of Channels </h1>
    <ChannelList />
    <h2> Channel Details </h2>
    <ChannelDetails />
  </div>
);

export default App;