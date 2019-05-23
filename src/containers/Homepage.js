import React, { PureComponent, Fragment } from 'react';
import '../App.css';
import ButtonSubmitComponents from '../components/ButtonSubmitComponent';

export default class Homepage extends PureComponent {
    constructor() {
        super();
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        this.props.history.push('/form');
    };

    render() {
        return (
            <Fragment>
                <br />
                <br />
                <br />
                <div className="c-title l-wrapper--large">
                    <h1 className="c-title__text">Envie d'apprendre React? C'est parti!</h1>
                </div>
                <br />
                <br />
                <br />
                <div className="u-padding-spacer c-btnWrapper u-theme-jadeGreen c-btnWrapper--fullOnMobile">
                    <ButtonSubmitComponents
                        label="Remplir le formulaire"
                        onSubmit={this.onClick}
                    />
                </div>
            </Fragment>
        );
    }
}