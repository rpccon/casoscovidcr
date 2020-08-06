import React, { Component } from 'react'
import Costarica from "../map/countryObject"
import Collapsible from "../Collapsible/Collapsible"
import { SVGMap } from "react-svg-map"
import runApiServer from "../service.config"
import $ from "jquery"
import "./MainPage.sass"
import Loader from 'react-loader-spinner'

class MainPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      provinces:null,
      hovered:"hovered",
      selectedProvinceId:"1",
      firstProvinceHovered: false,
      confirmation: false,
      headerText: "Casos COVID-19 CR",
      dataCases: [],
      lastDateUpdated: ""
    }
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

    this.getDatasets()
    this.getLastDateUpdated()
  }

  getLastDataUpdated(version) {
    const { lastDateUpdated } = this.state
    const classNameText = `date-content ${version ? version : ""}`

    return (
      <div className={classNameText}><strong>(</strong>Actualizado al: {lastDateUpdated}<strong>)</strong></div>
    )
  }

  getLastDateUpdated() {
    runApiServer(2, "POST").then(
      (resolvedValue) => {
        const { response } = resolvedValue;

       this.setState({ lastDateUpdated: response[0].lastdate });
      }
    )
  }
  
  getDatasets() {
    runApiServer(0, "POST").then(
      (resolvedValue) => {
        const { response } = resolvedValue; // falta validar cuando hay un error OJO
        this.setState({ dataCases: response });
      }
    )
  }

  filterDataFromSelectedProvince(dataCases) {
    const { selectedProvinceId } = this.state
    const filteredList = dataCases.filter((item) =>  (item.idprovince.toString() === selectedProvinceId));

    return filteredList
  }

  render() {
    const { headerText, dataCases, lastDateUpdated } = this.state

    return (
      <div className="main-container">
        {this.getLastDataUpdated("desktop")}
        <div className="header-text">
          <h1>{headerText}</h1>
          {this.getLastDataUpdated()}
        </div>
        <div className="map-container">
          <SVGMap map={Costarica} className={"map-wrapper"} onLocationClick={this._onProvinceHover} />
        </div>
        <div className="map-text-container">
          <div className="province-title"><div>Provincia:</div> <strong>{this._getCurrentProvince()[0].name}</strong></div>
        </div>
        {dataCases.length === 0
        ? <Loader
          type="Oval"
          color="#4583B2"
          height={100}
          width={100}
          visible={true}
          className={"loader"}
        />
        : <Collapsible dataCases={this.filterDataFromSelectedProvince(dataCases)}/>}
      </div>
    )
  }
}

export default MainPage