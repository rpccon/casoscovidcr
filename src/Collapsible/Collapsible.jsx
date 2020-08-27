import React, { Component } from 'react'
import "./Collapsible.sass"
import Row from "./Row/Row"
import uniqid from "uniqid"
import downArrow from "../Images/icon_arrow-down.png"
import upArrow from "../Images/icon_arrow-up.png"

class Collapsible extends Component {
  constructor(props) {
    super(props)

    this.state = {
      dataCases: props.dataCases
    }

    console.log("COLLAPSIBLE GET", this.state.dataCases)
  }

  static getDerivedStateFromProps = (newProps) => (newProps)

  render() {
    const { dataCases } = this.state

    return (
      <div className="collapsible">
        <div className="collapsible-container">
          {dataCases.map((item, index) => (<Row key={uniqid()} rowData={item} />))}
        </div>
      </div>
    )
  }
}

export default Collapsible