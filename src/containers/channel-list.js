import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class ChannelList extends Component {

  createChannelList() {
    return this.props.channels.map((channel) => {
      return (
        <li key={channel.id}> {channel.userName} {channel.channelName} </li>
      );
    })
  }

  render() {
    return (
      <ul>
        <li>hardcoded channel one</li>
        {this.createChannelList()}
      </ul>
    );
  }

}

// Takes data from main store(state) and passes in as prop "ie: this.props.channels"
function mapStateToProps(state) {
  return {
    channels: state.channels
  };
}

// Connect channel list along with data from store. Makes component 'smart'
export default connect(mapStateToProps)(ChannelList);