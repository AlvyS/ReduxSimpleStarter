import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { Grid, Row, Col, Panel } from 'react-bootstrap';

import { fetchStreams } from '../api/twitch-api';
import { updateChannels } from '../api/twitch-api';
import Channel from '../components/channel';


class ChannelList extends Component {

  createChannelList() {
    return this.props.channels.map((channel, i) => {
      return (
          <Col className='channel-container' md={4} mdOffset={1} xs={8} xsOffset={1} key={channel.id ? channel.id:i}>
            <Channel channel={channel}/> 
          </Col>
        )
    });
  }

  render() {
    const createChannelList = this.createChannelList();
    console.log('streams from channel-list', this.props.streams)
    console.log('channel from channel-list', this.props.channels)
    if(this.props.channels===null) {
      return ( <h1> no active channel </h1> )
    } else {
      return (
        <Grid bsClass='channel-list-container'>
          <Row className = 'channel-row'>
            {createChannelList}
          </Row>
        </Grid>
      );
    } 
  }
}

// Takes data from main store(state) and passes in as prop "ie: this.props.streams"
function mapStateToProps(state) {
  return {
    streams: state.streams,
    channels: state.streams.channels
  };
}

// Allows imported action to affect the container(smart), not just regular component
function matchDispatchToProps(dispatch) {
  return bindActionCreators({fetchStreams: fetchStreams, updateChannels: updateChannels}, dispatch)
}

// Connect channel list along with data from store. Makes component 'smart'
export default connect(mapStateToProps, matchDispatchToProps)(ChannelList);