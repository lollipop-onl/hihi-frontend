import React, { Component } from 'react';

import PickupItem from './PickupItem';

class Pickup extends Component {
  render () {
    return (
      <section className="pickup">
        <div className="container">
          <div className="pickup--wrapper">
            <PickupItem
              title="分別方法を検索"
              content="「これって何ごみだっけ？」そんなときは、このボットに聞いてみましょう！"
              icon="ion-search"
            />
            <PickupItem
              title="明日何の日？"
              content="明日が回収日のごみをおしらせします！ごみの次の回収日も調べることができます！"
              icon="ion-calendar"
            />
            <PickupItem
              title="成長するボット"
              content="このボットはAIではありません。あなたからのメッセージでボットは成長していきます！"
              icon="ion-university"
            />
          </div>
        </div>
      </section>
    );
  }
}

export default Pickup;
