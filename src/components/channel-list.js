import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { Grid, Row, Col, Panel } from 'react-bootstrap';
import { fetchChannel } from '../actions/index';
import Channel from '../components/channel';


class ChannelList extends Component {

  createChannelList() {
    return this.props.channels.map((channel, i) => {
      console.log('channel', channel)
      return (
          <Col className='channel-container' md={4} mdOffset={1} xs={10} xsOffset={1} key={channel.id ? channel.id:i}>
            <Channel channel={channel}/> 
          </Col>
        )
    });
  }

  render() {
    const createChannelList = this.createChannelList();
    console.log('props from channel-list', this.props.channels)
    return (
      <Grid bsClass='channel-list-container'>
        <Row className = 'channel-row'>
          {createChannelList}
        </Row>
      </Grid>
    );
  }

}

// Takes data from main store(state) and passes in as prop "ie: this.props.channels"
function mapStateToProps(state) {
  return {
    channels: state.channels,
    
  };
}

// Allows imported action to affect the container(smart), not just regular component
function matchDispatchToProps(dispatch) {
  return bindActionCreators({fetchChannel: fetchChannel}, dispatch)
}

// Connect channel list along with data from store. Makes component 'smart'
export default connect(mapStateToProps, matchDispatchToProps)(ChannelList);