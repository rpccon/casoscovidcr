import React, { Component } from 'react'
import "./Collapsible.sass"
import Row from "./Row/Row"
import uniqid from "uniqid"
import ContactShare from "../ContactShare/ContactShare"

class Collapsible extends Component {
  constructor(props) {
    super(props)

    this.state = {
      dataCases: props.dataCases
    }
  }

  static getDerivedStateFromProps = (newProps) => (newProps)

  render() {
    const { dataCases } = this.state

    return (
      <div className="collapsible">
        <div className="collapsible-container">
          {dataCases.map((item, index) => (<Row key={uniqid()} rowData={item} />))}
        </div>
        <ContactShare />
      </div>
    )
  }
}

export default Collapsible