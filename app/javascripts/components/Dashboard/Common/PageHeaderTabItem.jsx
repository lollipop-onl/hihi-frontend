import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import PropTypes from 'prop-types';

class PageHeaderTabItem extends Component {
  render () {
    const {
      active,
      title,
      to
    } = this.props;

    return(
      <Link to={to} className={`page-header-tab--item ${classNames({
        'page-header-tab--item__active': active
      })}`}>
        {title}
      </Link>
    );
  }
}

PageHeaderTabItem.propTypes = {
  title: PropTypes.string,
  active: PropTypes.bool,
  to: PropTypes.string
};

export default PageHeaderTabItem;
