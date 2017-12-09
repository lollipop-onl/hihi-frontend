import React, { Component } from 'react';

// Components
import Hero from '../components/LP/Hero';
import Pickup from '../components/LP/Pickup';
import Feature from '../components/LP/Feature';
import Help from '../components/LP/Help';

class LP extends Component {
  render () {
    return (
      <div>
        <Hero />
        <Pickup />
        <Feature />
        <Help />
      </div>
    );
  }
}

export default LP;
