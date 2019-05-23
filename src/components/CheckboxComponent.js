import React, { Component } from "react";

export default class CheckboxComponent extends Component {

    render() {
        return(
      <div className="c-checkboxMat">
        <input className="c-checkboxMat__field" type="checkbox" value="oui" />
          <label className="c-checkboxMat__label c-checkboxMat__labelPadding">
            <span className="c-checkboxMat__check u-theme-bg u-theme-color">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="9 14 30 30" width="30" height="30">
                <path fill="none" d="M14 27.2l7 7 12-12"></path>
              </svg>
            </span>
            <span className="c-checkboxMat__text c-wysiwyg">J'accepte de recevoir des communications par voie électronique sur des offres de produits ou services des sociétés du groupe <span className="u-textUppercase">Engie</span>.</span>
          </label>
        <input type="hidden" name="CONSENT_PROSPECTION_ENGIE_ANALOGUE" value="non" disabled="" />
      </div>
        );
    }
}