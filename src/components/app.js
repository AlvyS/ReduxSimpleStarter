import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import Navbar from '../components/navbar-header';
import FeaturedList from '../components/featured-list';
import ChannelList from '../components/channel-list';
import Searchbar from '../components/searchbar';
import { fetchStreams } from '../actions/actions';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { tab: 1 }
  }

  componentDidMount() {
    const {fetchStreams} = this.props
    fetchStreams(this.props.streams);
  }

  changeTab(e) {
    console.log('Clicked on tab', e)
    this.setState({tab: e})
  }

  renderCorrectTab() {
    if (this.state.tab == 1) {
      return  <FeaturedList />
    } else if (this.state.tab == 2) { 
      return <ChannelList />
    }
  }

  render () {
    return (
      <div>
        <Navbar changeTab={this.changeTab.bind(this)}/>
        {this.renderCorrectTab()}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    streams: state.streams.streamerName,
    channels: state.streams.channels
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({fetchStreams: fetchStreams}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(App);