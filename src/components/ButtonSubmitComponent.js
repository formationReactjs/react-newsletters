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
        console.log('submit');
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
    label: PropTypes.string,
    onSubmit: PropTypes.func
};

ButtonSubmitComponents.defaultProps = {
    label: 'Envoyer',
    onSubmit: () => {}
};
