import PropTypes from 'prop-types';
import React, { Component } from "react";

export default class Bubble extends Component {
  constructor(props) {
    super(props);
    this.state = {
        isChecked: false
    };
  }

  render() {
    return (
      <div>
        <input
          type="radio"
          value={this.props.label}
        />
      </div>
    );
  }
}

Bubble.propTypes = {
  label: PropTypes.string
};

Bubble.defaultProps = {
  label: ""
};
