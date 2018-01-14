import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Table extends Component {
  render () {
    const data = this.props.data.sort((a, b) => {
      if (a.count < b.count) return 1;
      if (a.count > b.count) return -1;
      if (a.timestamp < b.timestamp) return 1;
      if (a.timestamp > b.timestamp) return -1;
      return 0;
    });

    return (
      <div className="regist--list">
        <table className="regist--table">
          <thead>
            <tr>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, i) => {

            })}
          </tbody>
        </table>
      </div>
    );
  }
}

Table.propTypes = {
  data: PropTypes.array
};

export default Table;
