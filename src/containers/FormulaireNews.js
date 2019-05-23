import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import InputEmailComponent from '../components/InputEmailComponent';
import CheckboxComponent from '../components/CheckboxComponent';
import ButtonSubmitComponents from '../components/ButtonSubmitComponent';

export default class FormulaireNews extends Component {
    constructor() {
        super();
        this.state = {
            isEmailValide: false,
            isChecked: false,
            form: {
                email: '',
                checkbox: false
            }
        };

        this.isEmailValide = this.isEmailValide.bind(this);
        this.isChecked = this.isChecked.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    isEmailValide(value, email) {
        this.setState({
            isEmailValide: value,
            form: { ...this.state.form, email: email },
            isChecked: value ? this.state.isChecked : false
        });
    }
    isChecked(value) {
        this.setState({
            isChecked: value,
            form: { ...this.state.form, checkbox: value }
        });
    }
    handleSubmit() {
        console.log(this.state.form);
        this.props.history.push('/summary');
    }
    render() {
        return (
            <Fragment>
                <InputEmailComponent onValidEmail={this.isEmailValide} />
                {this.state.isEmailValide &&
                    <CheckboxComponent onCheckedBox={this.isChecked} />
                }
                {this.state.isChecked &&
                    <div className="u-padding-spacer c-btnWrapper u-theme-jadeGreen c-btnWrapper--fullOnMobile">
                        <ButtonSubmitComponents
                        onSubmit={this.handleSubmit}
                        label="Je valide mon formulaire"
                        />
                    </div>
                }
            </Fragment>
        );
    }
}
FormulaireNews.propTypes = {
    isEmailValide: PropTypes.func,
    isChecked: PropTypes.func
};

FormulaireNews.defaultProps = {
    isEmailValide: () => {},
    isChecked: () => {}
};
