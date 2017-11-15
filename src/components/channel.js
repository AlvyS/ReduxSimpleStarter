import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Thumbnail, Panel, Media } from 'react-bootstrap';
import {bindActionCreators} from 'redux';


class Channel extends Component {

  createChannelCard() {
    let channel = this.props.channel;
    return (
      <Panel bsClass='channel-card-container' 
        header={channel ? `${channel.name} is currently streaming!` : `${channel.name} is offline :(`}>
        <Media> 
          <Media.Left xsHidden>
            <img className='channel-logo' src={channel.logo}/> 
          </Media.Left>
          <Media.Body bsClass='text-container'>   
            <h2 className='channel-name'> {channel.name} </h2>
            <p className='channel-game'> 
              Currently Playing: <p> {channel.game} </p> 
            </p>
            <p className='channel-followers'> Followers: {channel.followers} </p>
          </Media.Body>
        </Media>
      </Panel>
    )
  } 

  render() {
    console.log('props in channel', this.props.channel)
    return ( 
      <div>
        {this.createChannelCard()}
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