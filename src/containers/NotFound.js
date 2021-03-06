import React, { Component, Fragment } from 'react';
import ButtonSubmitComponents from '../components/ButtonSubmitComponent';

export default class NotFound extends Component {

    handleSubmit = () => {
        this.props.history.push('/');
    }
    render() {
        return (
            <Fragment>
                <div>
                    <h3>404 : not found</h3>
                </div>

                <div className="u-padding-spacer c-btnWrapper u-theme-jadeGreen c-btnWrapper--fullOnMobile">
                    <ButtonSubmitComponents onSubmit={this.handleSubmit}/>
                </div>
            </Fragment>
        );
    }
}
