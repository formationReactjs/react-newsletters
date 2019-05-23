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
        return (
            <div className="c-btnWrapper u-theme-jadeGreen c-btnWrapper--fullOnMobile">
                <button
                    className="c-baseBtn u-theme-bg u-theme-bg-hover c-baseBtn--large"
                    type="submit"
                    onClick={this.submit}
                >
                    <span className="c-baseBtn__content">Valider</span>
                </button>
            </div>
        );
    }
}

ButtonSubmitComponents.propTypes = {
  onSubmit: PropTypes.func
};

ButtonSubmitComponents.defaultProps = {
  onSubmit: () => {}
};
