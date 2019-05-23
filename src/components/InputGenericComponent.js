import React, { Component } from "react";
import PropTypes from 'prop-types';

export default class InputGenericComponent extends Component {

    render() {
        const { type, validator } = this.props;

        return(
        <span className="c-inputMat">
        <span className="c-inputMat__wrap">
          <input className="c-inputMat__field" type={type} autoCapitalize="off" placeholder="Un placeholder" onBlur={validator} />
          <label className="c-inputMat__label">Input de type text</label>
          <span className="c-inputMat__inputLine" />
        </span>
        </span>
        );
    }
}

InputGenericComponent.propTypes = {
    type: PropTypes.string,
    validator: PropTypes.func
};

InputGenericComponent.defaultProps = {
    type: "text",
    validator: () => {}
};