import React, { Component } from 'react';
import { connect } from 'react-redux';

class Root extends Component {
    render() {
      return (
        <h1>Hello!</h1>
      );
    }
}

Root.propTypes = {
};

function mapStateToProps(state) {
  return {
  };
}

export default connect(mapStateToProps, {
})(Root);
