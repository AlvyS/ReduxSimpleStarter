import React from 'react';

import Navbar from '../components/navbar-header';
import ChannelList from '../components/channel-list';

const App = () => (
  <div>
    <Navbar />
    <h1> List of Channels </h1>
    <ChannelList />
  </div>
)


export default App;