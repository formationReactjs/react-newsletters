import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import ButtonSubmitComponents from '../components/ButtonSubmitComponent';
import { getEmail } from '../store/reducers/FormReducer';

class Summary extends Component {
    handleSubmit = () => {
        this.props.history.push('/');
    };
    render() {
        return (
            <Fragment>
                <div>
                    <h3>Sommaire de la formation</h3>
                </div>

                <h4>Voici le mail {this.props.email}</h4>

                <div className="u-padding-spacer c-btnWrapper u-theme-jadeGreen c-btnWrapper--fullOnMobile">
                    <ButtonSubmitComponents onSubmit={this.handleSubmit} />
                </div>
            </Fragment>
        );
    }
}
const mapStateToProps = state => getEmail(state);

export default connect(mapStateToProps)(Summary);
