import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Panel, Media, Button, Carousel, Glyphicon } from 'react-bootstrap';
import {bindActionCreators} from 'redux';


class FeaturedChannel extends Component {

  goToChannel() {
    let {name} = this.props.channel.stream.channel;
    window.open(`http://www.twitch.com/${name}`)
  }

  render() {
    let { logo, name, game, followers } = this.props.channel.stream.channel;
    let { viewers } = this.props.channel.stream;
    return (
      <Panel bsClass='featured-card-container'>
        <Media > 
          <Media.Left xsHidden>
            <img className='featured-logo' src={logo}/> 
          </Media.Left>
          <Media.Body bsClass='featured-text-container'>   
            <h2 className='featured-name'> {name} </h2>
            <div className='featured-game'> 
              Currently Playing: {game} 
            </div>
            <p className='featured-followers'> Followers : {followers}  ||  Viewers: {viewers} </p>
            <Button className='featured-button-delete' bsStyle='danger' bsSize='xsmall'>
              <Glyphicon glyph='trash'></Glyphicon>
            </Button>          
            <Button className='featured-button-watch'
              onClick={this.goToChannel.bind(this)} 
              bsStyle='info' 
              block> 
              Watch Now! 
            </Button> 
          </Media.Body>
        </Media>
      </Panel>
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

export default connect(mapStateToProps)(FeaturedChannel);