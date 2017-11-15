import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Thumbnail } from 'react-bootstrap';
import {bindActionCreators} from 'redux';


class Channel extends Component {

  render() {
    console.log('props in channel', this.props.channel)
    return ( 
      <div>
        <Thumbnail src={this.props.channel.logo} xsHidden bsClass='channel-logo'> 
        <div className='text-container'>
          <h2 className='channel-name'> {this.props.channel.name} </h2>
          <p className='channel-game'> Currently Playing: {this.props.channel.game} </p>
          <p className='channel-followers'> Followers: {this.props.channel.followers} </p>
        </div>
      </Thumbnail>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch)
}

export default connect(mapStateToProps)(Channel);