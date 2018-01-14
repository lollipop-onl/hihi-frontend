import React, { Component } from 'react';
import { connect } from 'react-redux';
import csvParse from 'csv-parse/lib/sync';
import Loader from 'react-loaders';
import PropTypes from 'prop-types';
import {
  uploadScheduleFile
} from '../../../actions';

class InputFile extends Component {
  constructor (props) {
    super(props);

    this.state = {
      file: null,
      fileName: null
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  /**
   * ファイルが変更されたら実行される関数
   * @param {any} e イベント
   */
  onChange (e) {
    const file = e.target.files[0];

    // ファイルタイプがCSVでなければエラー
    if (file.type !== 'text/csv') {
      this.setState({
        fileName: null
      });
      this.props.onUpdateFile([]);
      return;
    }

    const reader = new FileReader();
    reader.readAsText(file);

    reader.onload = (e) => {
      const data = csvParse(e.target.result);
      this.props.onUpdateFile(data);
      this.setState({
        file: data,
        fileName: file.name
      });
    }
  }

  /**
   * ファイルを送信したら実行される関数
   * @param {any} e イベント
   */
  onSubmit (e) {
    e.preventDefault();

    this.props.uploadScheduleFile(this.state.file);
  }

  render () {
    const { fileName } = this.state;
    const { isLoading } = this.props;

    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <div className="file-input--wrapper" style={{
            marginBottom: 42,
            marginTop: 24
          }}>
            <div className="file-input">
              <input type="file" className="file-input--input" onChange={this.onChange} />
              <div className={`file-input--icon ${fileName ? 'ion-document-text' : 'ion-document'}`} />
              <div className="file-input--file-name">{fileName || '選択されていません'}</div>
            </div>
            <button type="submit" className="file-input--submit" disabled={!fileName || isLoading}>
              {isLoading ? <Loader type="line-scale" className="file-input--loader" /> : '送信'}
            </button>
          </div>
        </form>
      </div>
    )
  }
}

InputFile.propTypes = {
  isLoading: PropTypes.bool,
  onUpdateFile: PropTypes.func,
  uploadScheduleFile: PropTypes.func
}

function mapStateToProps (state) {
  return {
    isLoading: state.dashboard.isLoadingScheduleUpload
  };
}

export default connect(mapStateToProps, {
  uploadScheduleFile
})(InputFile);
