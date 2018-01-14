import React, { Component } from 'react';

import InputFile from './InputFile';
import CsvTable from '../Common/CsvTable';

class ScheduleRegist extends Component {
  constructor (props) {
    super(props);

    this.state = {
      data: []
    };

    this.onUpdateFile = this.onUpdateFile.bind(this);
  }

  /**
   * ファイルが更新されたら実行する
   */
  onUpdateFile (data) {
    this.setState({
      data
    });
  }

  render () {
    return (
      <div>
        <InputFile
          onUpdateFile={this.onUpdateFile}
        />
        <CsvTable
          data={this.state.data}
          header={[
            { title: '地名' },
            { title: 'センター' },
            { title: '燃やせるごみ' },
            { title: 'プラスチック製容器包装' },
            { title: '燃やせないごみ' },
            { title: '古紙・紙製容器包装' }
          ]}
        />
      </div>
    );
  }
}

ScheduleRegist.propTypes = {
};

export default ScheduleRegist;
