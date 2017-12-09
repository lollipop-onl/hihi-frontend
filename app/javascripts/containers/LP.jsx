import React, { Component } from 'react';

// Components
import Hero from '../components/LP/Hero';
import Pickup from '../components/LP/Pickup';
import Feature from '../components/LP/Feature';

class LP extends Component {
  render () {
    return (
      <div>
        <Hero />
        <Pickup />
        <Feature />
      </div>
    );
  }
}

export default LP;
