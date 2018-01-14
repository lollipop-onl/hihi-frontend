import React, { Component } from 'react';

import FeatureItem from './FeatureItem';

class Feature extends Component {
  render () {
    return (
      <div className="container">
        <h2>機能のご紹介</h2>
        <div className="feature--wrapper">
          <div className="feature--items">
            <FeatureItem
              title="ごみの分別方法を検索"
              icon="ion-ios-search-strong"
            >
              <p>「このごみ、どうやって捨てるんだっけ？」</p>
              <p>そんなときは、このボットに聞いてみてください</p>
              <p>オープンデータや成長したビックデータから分別方法を調べてお教えします！</p>
              <p>また、そのごみがいつ回収なのかも併せておしらせします！</p>
            </FeatureItem>
            <FeatureItem
              title="明日は何ごみ？"
              icon="ion-ios-calendar-outline"
            >
              <p>「明日は何の回収日だっけ？」</p>
              <p>このボットでは、明日回収のごみをおしらせしたり、今後の回収スケジュールをおしらせしたりできます！</p>
              <p>お住いの地域を登録してその地区の回収予定をおしらせします！</p>
            </FeatureItem>
            <FeatureItem
              title="ボットを育てよう"
              icon="ion-ios-pulse"
            >
              <p>このボットは、宇部市が公開しているオープンデータをベースに情報を提供しています</p>
              <p>そのため、最初の段階では表現の違いには対応できません</p>
              <p>しかし質問が増えれば様々な質問に答えられるようになります！</p>
              <p>あなたの質問でこのボットを成長させましょう！</p>
            </FeatureItem>
          </div>
        </div>
      </div>
    );
  }
}

export default Feature;
