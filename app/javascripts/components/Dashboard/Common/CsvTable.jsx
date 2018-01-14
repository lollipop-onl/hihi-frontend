import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

class CsvTable extends Component {
  render () {
    const { data, header } = this.props;

    const TableHeaderContent = (
      <thead className="table--header">
        <tr>
          <th>#</th>
          {header.map((item, i) => (
            <th key={`title${i}`}>{item.title}</th>
          ))}
        </tr>
      </thead>
    );

    const TableBodyContent = (
      <tbody className="table--body">
        {data.map((item, i) => (
          i !== 0 ? (
            <tr
              key={`body${i}`}
              className={classNames({
                'row--error': item.length !== header.length
              })}
            >
              <td>{i}</td>
              {item.map((content, j) => (
                <td
                  key={`content${j}`}
                >
                  {content}
                </td>
              ))}
            </tr>
          ) : null
        ))}
      </tbody>
    );

    const TableEmptyContent = (
      <tbody className="table--empty">
        <tr>
          <td colSpan={header.length + 1}>
            <div className="empty--content">
              <span className="empty--icon ion-ios-copy-outline" />
              <p className="empty--message">ファイルを選択してください</p>
            </div>
          </td>
        </tr>
      </tbody>
    )

    return (
      <div className="table--wrapper">
        <table className="table">
          {TableHeaderContent}
          {data.length > 0 ? (
            TableBodyContent
          ) : (
            TableEmptyContent
          )}
        </table>
      </div>
    );
  }
}

CsvTable.propTypes = {
  data: PropTypes.array,
  header: PropTypes.array
};

export default CsvTable;
