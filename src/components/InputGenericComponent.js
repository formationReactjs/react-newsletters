import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class InputGenericComponent extends Component {

    constructor () {
        super();
        this.onBlur = this.onBlur.bind(this);
        this.inputRef = React.createRef();
    }

    componentDidMount() {
        if(this.props.focused) {
            this.inputRef.current.focus();
        }
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
                        ref={this.inputRef}
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
    onValidEmail: PropTypes.func,
    focused: PropTypes.bool
};

InputGenericComponent.defaultProps = {
    type: 'text',
    validator: () => {},
    onValidEmail: () => {},
    focused: false
};
