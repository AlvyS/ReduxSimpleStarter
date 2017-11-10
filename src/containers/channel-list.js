import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectChannel} from '../actions/index';

class ChannelList extends Component {

  createChannelList() {
    return this.props.channels.map((channel) => {
      return (
        <li 
          key={channel.id}
          onClick={() => this.props.selectChannel(channel)}
        > 
          {channel.userName} {channel.channelName}
        </li>
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

// Allows imported action to affect the container(smart), not just regular component
function matchDispatchToProps(dispatch) {
  return bindActionCreators({selectChannel: selectChannel}, dispatch)
}

// Connect channel list along with data from store. Makes component 'smart'
export default connect(mapStateToProps, matchDispatchToProps)(ChannelList);