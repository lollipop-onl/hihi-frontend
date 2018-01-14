import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PageHeader extends Component {
  render () {
    const {
      title,
      description,
      children
    } = this.props;

    return(
      <header className="page-header">
        <h1 className="page-header--title">{title}</h1>
        <p className="page-header--description">{description}</p>
        {children}
      </header>
    );
  }
}

PageHeader.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  children: PropTypes.node
};

export default PageHeader;
