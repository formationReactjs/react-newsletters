import React, { Component, Fragment } from "react";
import InputEmailComponent from "../components/InputEmailComponent";
import CheckboxComponent from "../components/CheckboxComponent";
import ButtonSubmitComponents from "../components/ButtonSubmitComponent";

export default class FormulaireNews extends Component {

    render() {
        return(
        <Fragment>
            <InputEmailComponent />
            <CheckboxComponent />
            <ButtonSubmitComponents />
      </Fragment>
        );
    }
}