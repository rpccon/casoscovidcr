import React, { Component } from 'react'
import $ from "jquery"
import "./Collapsible.sass"

class Collapsible extends Component {
  constructor(props) {
    super(props)

    this.state = {
      dataCases: props.dataCases
    }
  }

  componentWillReceiveProps(newProps) {
    this.setState({ dataCases: newProps.dataCases});
  }

  render() {
    const { dataCases } = this.state

    return (
      <div className="collapsible-container">
        {
          dataCases.map((item) => (
            <div key={`${item.id}-item-collapsible`} className="item-collapsible">
              <button>{item.nombre}</button>
              <div>tableData</div>
            </div>
          ))
        }
      </div>
    )
  }
}

export default Collapsible