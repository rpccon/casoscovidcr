import React, { Component } from 'react'
import "./Collapsible.sass"
import Row from "./Row/Row"
import TableBox from "../TableBox/TableBox"
import uniqid from "uniqid"
import ContactShare from "../ContactShare/ContactShare"

class Collapsible extends Component {
  constructor(props) {
    super(props)

    this.state = {
      dataCases: props.dataCases,
      selectedProvinceId: props.selectedProvinceId,
      national: "national"
    }
  }

  filterDataFromSelectedProvince(dataCases) {
    const { selectedProvinceId } = this.state
    const filteredList = dataCases.filter((item) =>  (item.idprovince.toString() === selectedProvinceId));

    return filteredList
  }

  generateTotalNumbers(dataCases) {
    let objectToAdd = {
      accumulatedcases: 0,
      activecases: 0,
      deceasedcases: 0,
      newcases: 0,
      recoveredcases: 0
    }

    objectToAdd = dataCases.reduce((acc, item) => {
      const {
        accumulatedcases,
        activecases,
        deceasedcases,
        newcases,
        recoveredcases
      } = item

      acc.accumulatedcases = acc.accumulatedcases + parseInt(accumulatedcases)
      acc.activecases = acc.activecases + parseInt(activecases)
      acc.deceasedcases = acc.deceasedcases + parseInt(deceasedcases)
      acc.newcases = acc.newcases + parseInt(newcases)
      acc.recoveredcases = acc.recoveredcases + parseInt(recoveredcases)

      return acc
    }, objectToAdd)

    objectToAdd.alerts = []

    return objectToAdd
  }

  static getDerivedStateFromProps = (newProps) => (newProps)

  render() {
    const { dataCases, national } = this.state

    const filteredDataCases = this.filterDataFromSelectedProvince(dataCases)

    return (
      <div className="collapsible">
        <div className="collapsible-container">
          <div className={"title-info"}>Información de casos:</div>
          {filteredDataCases.map((item, index) => (<Row key={uniqid()} rowData={item} />))}
        </div>
        <div className={`${national}-resume`}>
          <div className={"title-info resume"}>Resumen a nivel nacional</div>
          <TableBox rowData={this.generateTotalNumbers(dataCases)} class={`${national}-info`}/>
        </div>
        <ContactShare />
      </div>
    )
  }
}

export default Collapsible