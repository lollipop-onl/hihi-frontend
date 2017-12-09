import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FeatureItem extends Component {
  render () {
    const {
      title,
      children,
      icon
    } = this.props;

    return (
      <div className="feature-item">
        <div className="feature-item--icon {icon}" />
        <div className="feature-item--body">
          <div className="feature-item--heading">{title}</div>
          <div className="feature-item--content">{children}</div>
        </div>
      </div>
    );
  }
}

FeatureItem.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
  icon: PropTypes.string
};

export default FeatureItem;
