import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class channelList extends Component {

  render() {
    return (
      <ul>
        <li>channelList one</li>
        <li>channelList two</li>
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
export default connect(mapStateToProps)(channelList);