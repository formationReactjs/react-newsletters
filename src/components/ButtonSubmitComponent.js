import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ButtonSubmitComponents extends Component {
    constructor() {
        super();
        this.state = {
            checkboxValue: false
        };

        this.submit = this.submit.bind(this);
    }
    submit() {
        this.props.onSubmit();
    }
    render() {
        const { label } = this.props;

        return (
            <div className="c-baseBtn u-theme-bg u-theme-bg-hover c-baseBtn--hasLoader c-baseBtn--large">
                <button
                    className="c-baseBtn u-theme-bg u-theme-bg-hover c-baseBtn--large"
                    type="submit"
                    onClick={this.submit}
                >
                    <span className="c-baseBtn__content">{label}</span>
                </button>
            </div>
        );
    }
}

ButtonSubmitComponents.propTypes = {
  onSubmit: PropTypes.func,
  label: PropTypes.string
};

ButtonSubmitComponents.defaultProps = {
  onSubmit: () => {},
  label: ""
};
