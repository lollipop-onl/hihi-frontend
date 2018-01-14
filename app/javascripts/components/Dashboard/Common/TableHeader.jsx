import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TableHeader extends Component {
  render () {
    const {
      header
    } = this.props;

    return (
      <thead className="table--header">
        <tr>
          <th>#</th>
          {header.map((item, i) => (
            <th key={`title${i}`}>{item.title}</th>
          ))}
        </tr>
      </thead>
    );
  }
}

TableHeader.propTypes = {
  header: PropTypes.array
};

export default TableHeader;
