import React, { Component } from 'react'
import "./Collapsible.sass"

class Collapsible extends Component {
  constructor(props) {
    super(props)

    this.state = {
      dataCases: props.dataCases
    }
  }

  componentWillReceiveProps(newProps) {
    this.setState({ dataCases: newProps.dataCases})
  }

  onItemCollapsibleClick = (context) => {
    const parentTargetElement = context.target.parentElement
    const contentElement = parentTargetElement.nextElementSibling

    if(!contentElement.classList.contains("active")) {
      contentElement.classList.add("active")
    } else {
      contentElement.classList.remove("active")
    }
  }

  render() {
    const { dataCases } = this.state

    return (
      <div className="collapsible">
        <div className="collapsible-container">
          {
            dataCases.map((item) => (
              <div key={`${item.id}-item-collapsible`} className="item-collapsible">
                <div className="btn-collapse" onClick={this.onItemCollapsibleClick}><div className="name">{item.nombre}</div><div className="arrow"></div></div>
                <div className="content-collapse">tableData</div>
              </div>
            ))
          }
        </div>
      </div>
    )
  }
}

export default Collapsible