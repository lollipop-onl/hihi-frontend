import React, { Component } from 'react';

import HelpFigure from './HelpFigure';

class Help extends Component {
  render () {
    return (
      <div className="help">
        <div className="container">
          <div className="help--heading">
            <div className="heading--icon ion-ios-heart" />
            <h2>このボットはAIではありません</h2>
          </div>
          <div className="help--content">
            <p>このボットはコンピューターではなく市民の手によって進化していきます</p>
            <p>このプロジェクトに加わってボットを育ててみませんか？</p>
          </div>
          {/* <a href="#" className="help--button">プロジェクトに参加する</a> */}
          <span className="help--button help--button__disabled">Coming Soon ...</span>
        </div>
        <HelpFigure />
      </div>
    );
  }
}

export default Help;
