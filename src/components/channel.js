import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Panel, Media, Button } from 'react-bootstrap';
import {bindActionCreators} from 'redux';


class Channel extends Component {

  goToChannel() {
    window.open(`http://www.twitch.com/${this.props.channel.name}`)
  }

  createChannelCard() {
    console.log('props in chan', this.props)
    let {channel} = this.props;
    return (
      <Panel bsClass='channel-card-container'>
        <Media > 
          <Media.Left xsHidden>
            <img className='channel-logo' src={channel.logo}/> 
          </Media.Left>
          <Media.Body bsClass='text-container'>   
            <h2 className='channel-name'> {channel.name} </h2>
            <div className='channel-game'> 
              Currently Playing:  {channel.game} 
            </div>
            <p className='channel-followers'> Followers: {channel.followers} </p>
            <div>
              <Button onClick={this.goToChannel.bind(this)} bsStyle='info' block> Watch Now! </Button> 
            </div>
          </Media.Body>
        </Media>
      </Panel>
    )
  } 

  render() {
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