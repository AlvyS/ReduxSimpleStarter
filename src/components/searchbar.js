import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {addStreamer} from '../actions/actions';
import { Form, FormGroup, Navbar, FormControl, Button } from 'react-bootstrap';

class Searchbar extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''}

    this.handleEnter = this.handleEnter.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    // const {addStreamer} = this.props;
  }

  handleChange(e) {
    this.setState({ value: e.target.value }); 
    console.log('state changed', this.state.value)
  }

  handleEnter(e) {
    if(e.keyCode == 13) {
      console.log('pressed enter', this.state.value)
      addStreamer(e.target.value)
    }
  }

  render() {
    const {addStreamer, value} = this.props
    return (
      <Navbar.Form>
        <FormGroup>
          <FormControl type='text' placeholder='type name'/>
        </FormGroup>
          {' '}
          <Button type='submit'>Add</Button>
      </Navbar.Form>
      //  <div>
      //   <input 
      //     className = 'searchbar'
      //     placeholder = 'enter streamer name'
      //     onChange = { this.handleChange }
      //     onKeyDown = { this.handleEnter }
      //     value = {this.state.value}
      //   />
      //   <button className='submitsearch'> Add </button>
      // </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    streams: state.streams.streamerName
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({addStreamer}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Searchbar);