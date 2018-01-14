import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PageHeaderTab extends Component {
  render () {
    const {
      children
    } = this.props;

    return(
      <div className="page-header-tab">
        {children}
      </div>
    );
  }
}

PageHeaderTab.propTypes = {
  children: PropTypes.node
};

export default PageHeaderTab;
