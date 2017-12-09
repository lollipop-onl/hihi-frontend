import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Router from '../components/Router';

class Root extends Component {
    render() {
      return (
        <Router
          store={this.props.store}
        />
      );
    }
}

Root.propTypes = {
  store: PropTypes.any.isRequired
};

export default Root;
