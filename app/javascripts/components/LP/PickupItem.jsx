import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PickupItem extends Component {
  render () {
    const {
      title,
      content,
      icon
    } = this.props;

    return (
      <div className="pickup-item">
        <div className="pickup-item--heading">
          <span className={icon} />
          <h3>{title}</h3>
        </div>
        <p className="pickup-item--content">{content}</p>
      </div>
    );
  }
}

PickupItem.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  icon: PropTypes.string
};

export default PickupItem;
