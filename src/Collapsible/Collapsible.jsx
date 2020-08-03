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
    console.log("ddfsfd", newProps);
    this.setState({ dataCases: newProps.dataCases});
  }

  render() {
    const { dataCases } = this.state
    console.log("try to render", dataCases);
    

    return (
      <div className="collapsible">
        <div className="collapsible-container">
          {
            dataCases.map((item) => (
              <div key={`${item.id}-item-collapsible`} className="item-collapsible">
                <div className="btn-collapse"><div className="name">{item.nombre}</div><div className="arrow"></div></div>
                <div>tableData</div>
              </div>
            ))
          }
        </div>
      </div>
    )
  }
}

export default Collapsible