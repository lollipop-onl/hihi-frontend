import React, { Component } from 'react';

class GetStarted extends Component {
  render () {
    return (
      <div className="get-started">
        <div className="container">
          <h2>サービスを</h2>
          <h3>このサービスは無料でどなたでもご利用いただけます</h3>
          <p>ログ収集や回収日をご案内するために送信されたデータは、発信したユーザーの情報とは切り離されて保存されます</p>
          <div className="information">
            <div className="information--qr-code" />
            <ol className="information--process">
              <li>LINEアプリで「友達追加＞QRコード」からQRコードリーダーを起動します</li>
              <li>上記のQRコードを読み取ります</li>
              <li>「宇部市ゴミ捨てお助けボット」のアカウントが表示されたら、「友達追加」ボタンを押します</li>
              <li>画面に表示される案内をご確認ください</li>
            </ol>
          </div>
        </div>
      </div>
    );
  }
}

export default GetStarted;
