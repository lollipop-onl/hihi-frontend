import React, { Component } from 'react';

class GetStarted extends Component {
  render () {
    return (
      <div className="get-started">
        <div className="container">
          <h2>サービスを使う</h2>
          <h3>このサービスは無料でどなたでもご利用いただけます</h3>
          <p>ログ収集や回収日をご案内するために送信されたデータは、発信したユーザーの情報とは切り離されて保存されます</p>
          <div className="information">
            <div className="information--qr-code">
              <img src="http://qr-official.line.me/L/10eiacnRoT.png" />
            </div>
            <div className="information--brand-name">宇部市ゴミ捨てお助けボット</div>
            <ol className="information--process">
              <li>LINEアプリで「友達追加＞QRコード」からQRコードリーダーを起動します</li>
              <li>上記のQRコードを読み取ります</li>
              <li>「宇部市ゴミ捨てお助けボット」のアカウントが表示されたら、「友達追加」ボタンを押します</li>
              <li>画面に表示される案内をご確認ください</li>
            </ol>
            <div className="information--friend">
              <a href="https://line.me/R/ti/p/%40put2770t">
                <img height="36" border="0" alt="友だち追加" src="https://scdn.line-apps.com/n/line_add_friends/btn/ja.png" />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default GetStarted;
