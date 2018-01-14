import React, { Component } from 'react';

class Hero extends Component {
  render () {
    return (
      <section className="hero">
        <div className="container">
          <div className="hero--wrapper">
            <div className="hero--content">
              <h2>宇部市オープンデータ活用サービス</h2>
              <h1>みんなで育てるごみ分別案内ボット</h1>
              <p>ごみ分別をより手軽に。ごみの分別方法を調べたり、回収日をお知らせしたりできるLINEボットです。使えば使うほどオープンデータが成長していきます</p>
              <div className="hero--button-group">
                <a href="#" className="hero--button__primary">ボットを使ってみる</a>
                <a href="#" className="hero--button__outline">運営に協力する</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Hero;
