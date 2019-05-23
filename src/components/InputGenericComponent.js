import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class InputGenericComponent extends Component {

    constructor () {
        super();
        this.onBlur = this.onBlur.bind(this);
    }

    onBlur(el) {
        const { validator } = this.props;
        validator(el.currentTarget.value);
    }
    
    render() {
        const { type } = this.props;

        return (
            <span className="c-inputMat">
                <span className="c-inputMat__wrap">
                    <input
                        className="c-inputMat__field"
                        type={type}
                        autoCapitalize="off"
                        placeholder="Un placeholder"
                        onBlur={this.onBlur}
                    />
                    <label className="c-inputMat__label">
                        Input de type text
                    </label>
                    <span className="c-inputMat__inputLine" />
                </span>
            </span>
        );
    }
}

InputGenericComponent.propTypes = {
    type: PropTypes.string,
    validator: PropTypes.func,
    onValidEmail: PropTypes.func
};

InputGenericComponent.defaultProps = {
    type: 'text',
    validator: () => {},
    onValidEmail: () => {}
};
