import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CheckboxComponent extends Component {
    constructor() {
        super();
        this.state = {
            checkboxValue: false
        };

        this.onChange = this.onChange.bind(this);
    }

    onChange() {
        this.setState({ checkboxValue: !this.state.checkboxValue }, () => {
            this.props.onCheckedBox(this.state.checkboxValue);
        });
    }

    render() {
        return (
            <div className="c-checkboxMat">
                <input
                    type="checkbox"
                    value=""
                    checked={this.state.checkboxValue}
                    onChange={this.onChange}
                />
                <label className="c-checkboxMat__label c-checkboxMat__labelPadding">
                    <span className="c-checkboxMat__check u-theme-bg u-theme-color">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="9 14 30 30"
                            width="30"
                            height="30"
                        >
                            <path fill="none" d="M14 27.2l7 7 12-12" />
                        </svg>
                    </span>
                    <span className="c-checkboxMat__text c-wysiwyg">
                        J'accepte de recevoir des communications par voie
                        électronique sur des offres de produits ou services des
                        sociétés du groupe{' '}
                        <span className="u-textUppercase">Engie</span>.
                    </span>
                </label>
                <input
                    type="hidden"
                    name="CONSENT_PROSPECTION_ENGIE_ANALOGUE"
                    value="non"
                    disabled=""
                />
            </div>
        );
    }
}

CheckboxComponent.propTypes = {
    onCheckedBox: PropTypes.func
};

CheckboxComponent.defaultProps = {
    onCheckedBox: () => {}
};
