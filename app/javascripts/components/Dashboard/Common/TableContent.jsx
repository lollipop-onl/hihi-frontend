import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

class TableHeader extends Component {
  render () {
    const {
      data,
      length,
      emptyIcon,
      emptyMessage
    } = this.props;

    return (
      data.length === 0 ? (
        <tbody className="table--empty">
          <tr>
            <td colSpan={length + 1}>
              <div className="empty--content">
                <span className={`empty--icon ${emptyIcon || 'ion-battery-empty'}`} />
                <p className="empty--message">{emptyMessage || 'データがありません'}</p>
              </div>
            </td>
          </tr>
        </tbody>
      ) : (
        <tbody className="table--body">
          {data.map((item, i) => (
            <tr
              key={`body${i}`}
              className={classNames({
                'row--error': item.length !== length
              })}
            >
              <td>{i + 1}</td>
              {item.map((content, j) => (
                <td
                  key={`content${j}`}
                >
                  {content}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      )
    );
  }
}

TableHeader.propTypes = {
  data: PropTypes.array,
  length: PropTypes.number,
  emptyIcon: PropTypes.string,
  emptyMessage: PropTypes.string
};

export default TableHeader;
