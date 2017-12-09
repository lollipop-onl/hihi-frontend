import React, { Component } from 'react';

import FeatureItem from './FeatureItem';

class Feature extends Component {
  render () {
    return (
      <div className="container">
        <h2>機能のご紹介</h2>
        <div className="feature--wrapper">
          <div className="feature--details">
            <FeatureItem
              title="見出し"
              icon="ion-loop"
            >
              <p>Lorem ipsum dolor sit amet.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur natus eveniet quia.</p>
              <p>Lorem ipsum dolor sit.</p>
            </FeatureItem>
            <FeatureItem
              title="見出し"
              icon="ion-loop"
            >
              <p>Lorem ipsum dolor sit amet.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur natus eveniet quia.</p>
              <p>Lorem ipsum dolor sit.</p>
            </FeatureItem>
          </div>
        </div>
      </div>
    );
  }
}

export default Feature;
