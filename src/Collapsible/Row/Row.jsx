import React, { Component } from 'react'
/* import downArrow from "../Images/icon_arrow-down.png"
import upArrow from "../Images/icon_arrow-up.png" */

class Row extends Component {
  constructor(props) {
    super(props)

    const { rowData } = props
    const { id, name } = rowData

    this.state = {
      rowId: id,
      name
    }
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
    const { rowId, name } = this.state

    return (
      <div key={`${rowId}-item-collapsible`} className="item-collapsible">
        <div className="btn-collapse" onClick={this.onItemCollapsibleClick}>
          <div className="name">{name}</div>
          <div className="arrow"></div>
        </div>
        <div className="content-collapse">tableData</div>
      </div>
    )
  }
}

export default Row