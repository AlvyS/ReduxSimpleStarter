import React from 'react';

import Navbar from '../components/navbar-header';
import FeaturedList from '../components/featured-list';
import ChannelList from '../components/channel-list';
import Searchbar from '../components/searchbar';

const App = () => (
  <div>
    <Navbar />
    <FeaturedList />
    <ChannelList />
  </div>
)


export default App;