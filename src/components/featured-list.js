import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { Carousel, Grid, Row, Col, Panel  } from 'react-bootstrap';

import { fetchFeatured } from '../actions/action-featured';
import FeaturedChannel from '../components/featured-channel';


class FeaturedList extends Component {

  componentDidMount() {
    const {fetchFeatured} = this.props
    fetchFeatured();
  }

  createFeaturedList() {
    return this.props.featured.map((channel, i) => {
      return (
          <Col className='featured-container' 
            md={6} mdOffset={3} xs={8} xsOffset={1} 
            key={channel.id ? channel.id:i} 
          >
            <FeaturedChannel channel={channel}/> 
          </Col>
        )
    });
  }

  render() {
    const createFeaturedList = this.createFeaturedList();
    return ( 
      <Grid bsClass='featured-list-container'>
        <Row className = 'featured-row'>
          {createFeaturedList}
        </Row>
      </Grid>
    );
  } 
}

function mapStateToProps(state) {
  return {
    featured: state.featured.featured,
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({fetchFeatured: fetchFeatured}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(FeaturedList);