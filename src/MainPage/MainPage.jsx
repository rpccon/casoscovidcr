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
      selectedProvinceId:"guanacaste",
      firstProvinceHovered: false,
      confirmation: false,
      headerText: "Casos COVID-19 CR"
    }

   // this._askForConfirmation();
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
    const { hovered } = this.state
    const { currentTarget, srcElement } = context
    const eventTarget = currentTarget ? currentTarget : srcElement
    const currentProvinceId = $(eventTarget).attr("id");

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

    if(password === "") {
      this.setState({ confirmation: true });
      //this.state.confirmation = true; //({ confirmation: true });
    } else {
      this.setState({ headerText: "ERROR ! Intente mas tarde" });
    }
  }

  componentDidMount() {
    const { firstProvinceHovered, hovered } = this.state

    if(!firstProvinceHovered) {
      const currentElement = this._getCurrentProvince()
      const [ currentProvince ] = currentElement
      const { id } = currentProvince

      const theseProvincesDom = $(".main-container .map-container svg path");
      const theseProvincesArray = this._convertNodeListInArray(theseProvincesDom);

      theseProvincesArray.forEach(element => {
        const thisProvince = $(element)

        if(thisProvince.attr("id") === id) {
          thisProvince.addClass(hovered);
        }
      });

      this.setState({ firstProvinceHovered: true, provinces: theseProvincesArray });
    }
  }

  render() {
   const { headerText } = this.state
    //confirmation 
    return (
      <div className="main-container">
        <div className="header-text">
          <h1>{headerText}</h1>
        </div>
        {/*confirmation
          && <div className="map-container">
            <SVGMap map={Costarica} className={"map-wrapper"} onLocationClick={this._onProvinceHover} />
          </div>
        */}
        <div className="map-container">
          <SVGMap map={Costarica} className={"map-wrapper"} onLocationClick={this._onProvinceHover} />
        </div>
        <div className="map-text-container">
          <div className="province-title"><div>Provincia:</div> <strong>{this._getCurrentProvince()[0].name}</strong></div>
        </div>
        
      </div>
    )
  }
}

export default MainPage