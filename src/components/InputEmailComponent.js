import React, { Component } from "react";
import InputGenericComponent from "./InputGenericComponent";

export default class InputEmailComponent extends Component {

    constructor () {
        super();
        this.validator = this.validator.bind(this);
    }

    validator (email) {
        const pattern = /^[A-Za-z0-9.\-_]+[@][A-Za-z0-9\-.]+[.][A-Za-z]{2,}?$/;
        console.log(pattern.test(String(email).toLowerCase()));
    }
    render() {
        return(
        <InputGenericComponent validator={this.validator} type="email" />
        );
    }
}