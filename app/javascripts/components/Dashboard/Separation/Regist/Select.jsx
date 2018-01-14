import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Select extends Component {
  constructor (props) {
    super(props);

    this.state = {
    };
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.data[0]) {
      this.setState({
        value: nextProps.data[0].value
      });
    }
  }

  onChange (e) {
    this.setState({
      value: e.target.value
    });
  }

  render () {
    const selectedItem = this.props.data.find(item => item.value == this.state.value) || {};

    return (
      <div>
        <select
          className="regist--select"
          onChange={this.onChange.bind(this)}
        >
          {this.props.data.map((item, i) => (
            <option
              key={`option${i}`}
              value={item.value}
            >
              {item.label}
            </option>
          ))}
        </select>
      </div>
    );
  }
}

Select.propTypes = {
  data: PropTypes.array
};

export default Select;
