import React, { Component } from "react";

export default class ButtonSubmitComponents extends Component {

    render() {
        return(
      <div className="c-btnWrapper u-theme-jadeGreen c-btnWrapper--fullOnMobile">
        <button className="c-baseBtn u-theme-bg u-theme-bg-hover c-baseBtn--large" type="submit" data-e-form-validation-submit="data-e-form-validation-submit">
          <span className="c-baseBtn__content">Valider</span>
        </button>
      </div>
        );
    }
}