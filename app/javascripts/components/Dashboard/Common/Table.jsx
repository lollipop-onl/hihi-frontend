import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TableHeader from './TableHeader';
import TableContent from './TableContent';

class Table extends Component {
  render () {
    const {
      data,
      header,
      emptyIcon,
      emptyMessage
    } = this.props;

    return (
      <div className="table--wrapper">
        <table className="table">
          <TableHeader
            header={header}
          />
          <TableContent
            data={data}
            length={header.length}
            emptyIcon={emptyIcon}
            emptyMessage={emptyMessage}
          />
        </table>
      </div>
    );
  }
}

Table.propTypes = {
  data: PropTypes.array,
  header: PropTypes.array,
  emptyIcon: PropTypes.string,
  emptyMessage: PropTypes.string
};

export default Table;
