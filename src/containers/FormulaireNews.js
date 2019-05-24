import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import InputEmailComponent from '../components/InputEmailComponent';
import CheckboxComponent from '../components/CheckboxComponent';
import ButtonSubmitComponents from '../components/ButtonSubmitComponent';
import { setForm } from '../store/actions/FormAction';

class FormulaireNews extends Component {
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
        console.log('handleSubmit');
        console.log(this.state.form);

        this.props.setForm({
            email: this.state.form.email,
            checkbox: this.state.form.checkbox
        });
        this.props.history.push('/summary');
    }
    render() {
        return (
            <Fragment>
                <InputEmailComponent onValidEmail={this.isEmailValide}/>
                <InputEmailComponent focused />
                {this.state.isEmailValide && (
                    <CheckboxComponent onCheckedBox={this.isChecked} />
                )}

                {this.state.isChecked && (
                    <div className="u-padding-spacer c-btnWrapper u-theme-jadeGreen c-btnWrapper--fullOnMobile">
                        {' '}
                        <ButtonSubmitComponents
                            onSubmit={this.handleSubmit}
                        />{' '}
                    </div>
                )}
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

const mapDispatchToProps = dispatch =>
    bindActionCreators({ setForm }, dispatch);

export default connect(
    null,
    mapDispatchToProps
)(FormulaireNews);
