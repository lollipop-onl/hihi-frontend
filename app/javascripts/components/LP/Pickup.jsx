import React, { Component } from 'react';

import PickupItem from './PickupItem';

class Pickup extends Component {
  render () {
    return (
      <section className="pickup">
        <div className="container">
          <div className="pickup--wrapper">
            <PickupItem
              title="見出し"
              content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia, pariatur!"
              icon="ion-ionic"
            />
            <PickupItem
              title="見出し"
              content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia, pariatur!"
              icon="ion-ionic"
            />
            <PickupItem
              title="見出し"
              content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia, pariatur!"
              icon="ion-ionic"
            />
          </div>
        </div>
      </section>
    );
  }
}

export default Pickup;
