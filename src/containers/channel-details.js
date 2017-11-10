import React, {Component} from 'react';
import {connect} from 'react-redux';

class ChannelDetails extends Component {

  render() {

    // When no channel selected
    if (!this.props.channel) {
      return ( 
        <div> Please Select a Channel </div>
      )
    }

    return (
      <div>
        <span> Followers: </span>
        <span> {this.props.channel.followers} </span>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    channel: state.currentChannel
  }
}

export default connect(mapStateToProps)(ChannelDetails);