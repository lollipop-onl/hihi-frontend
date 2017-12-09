import React, { Component } from 'react';

// Components
import Hero from '../components/LP/Hero';
import Pickup from '../components/LP/Pickup';

class LP extends Component {
  render () {
    return (
      <div>
        <Hero />
        <Pickup />
      </div>
    );
  }
}

export default LP;
