import React, { Component } from 'react'
import Costarica from "../map/countryObject"
import { SVGMap } from "react-svg-map"
import $ from "jquery"
import "./MainPage.sass"

class MainPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      provinces:null,
      hovered:"hovered",
      selectedProvinceId:"alajuela",
      confirmation: false,
      headerText: "Casos COVID-19 CR"
    }

   // this._askForConfirmation();
  }

  _setFirstProvinceSelected() {//determinar cuando se finaliza de cargar para tomar el elemento del DOM
    const { hovered } = this.state;// y agregar la clase de hover para que lo auto seleccione
    const currentProvince = this._getCurrentProvince();
  //  console.log("called", currentProvince);
   // console.log($("#alajuela"));
  //   $(currentProvince).addClass(hovered);
  }

  _getCurrentProvince() {
    const provinces = Costarica.locations
    const { selectedProvinceId } = this.state
    
    return (
      provinces.filter((item) => (item.id === selectedProvinceId))
    )
  }

  _convertNodeListInArray(nodeList) {
    return Array.prototype.slice.call(nodeList, 0)
  }

  _cleanProvincesSelected() {
    const { provinces, hovered } = this.state

    if(provinces) {
      provinces.forEach(element => {
        $(element).removeClass(hovered);
      });
    }
  }

  _onProvinceHover = (context) => {
    const { provinces, hovered } = this.state
    const { currentTarget, srcElement } = context
    const eventTarget = currentTarget ? currentTarget : srcElement
    const currentProvinceId = $(eventTarget).attr("id");

    if(!provinces) {
      const newProvinces = this._convertNodeListInArray($(eventTarget).parent()[0].querySelectorAll("path"));

      this.setState({ provinces: newProvinces });
    }

    if(!$(eventTarget).hasClass(hovered)) {
      this._cleanProvincesSelected();
      $(eventTarget).addClass(hovered);
      this.setState({ selectedProvinceId: currentProvinceId });
    } else {
      $(eventTarget).removeClass(hovered);
    }
  }

  _askForConfirmation() {
    const password = prompt("password", '');

    if(password === "90640") {
      this.setState({ confirmation: true });
      //this.state.confirmation = true; //({ confirmation: true });
    } else {
      this.setState({ headerText: "ERROR ! Intente mas tarde" });
    }
  }

  componentDidMount() {
    this._askForConfirmation()
  }

  render() {
   const { confirmation, headerText } = this.state

    return (
      <div className="main-container">
        <div class="header-text">
          <h1>{headerText}</h1>
        </div>
        {confirmation
          && <div className="map-container">
            <SVGMap map={Costarica} className={"map-wrapper"} onLocationClick={this._onProvinceHover} />
            <div>Provincia: {this._getCurrentProvince()[0].name}</div>
          </div>
        }
      </div>
    )
  }
}

export default MainPage