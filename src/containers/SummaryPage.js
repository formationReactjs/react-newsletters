import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import '../App.css';
import ButtonSubmitComponents from '../components/ButtonSubmitComponent';

class SummaryPage extends PureComponent {
    constructor() {
        super();
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        this.props.history.push('/');
    };

    render() {
        return (
            <Fragment>
                <br />
                <br />
                <br />
                <div className="c-title l-wrapper--large">
                    <h1 className="c-title__text">Merci d'avoir souscris à notre newsletter!</h1>
                    <h1 className="c-title__text">{"Nous vous avons envoyé un email à l'adresse " + this.props.email}</h1>
                </div>
                <br />
                <br />
                <br />
                <div className="u-padding-spacer c-btnWrapper u-theme-jadeGreen c-btnWrapper--fullOnMobile">
                    <ButtonSubmitComponents
                        label="Retourner à l'accueil"
                        onSubmit={this.onClick}
                    />
                </div>
            </Fragment>
        );
    }
}

const mapStateToProps = function(state) {
    return {
      email: state.formReducer.email
    }
  }
  
  export default connect(mapStateToProps)(SummaryPage);