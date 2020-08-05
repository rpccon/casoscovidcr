import React, { Component } from 'react'
import $ from "jquery"
import downArrow from "../../Images/icon_arrow-down.png"
import upArrow from "../../Images/icon_arrow-up.png"

class Row extends Component {
  constructor(props) {
    super(props)

    const { rowData } = props
    const { id, name } = rowData

    this.state = {
      rowId: id,
      name,
      isActive: false,
      itemCollapse: "item-collapsible",
      plusMsg: "Mostrar "
    }
  }

  onItemCollapsibleClick = (context) => {
    const { isActive } = this.state

    this.setState({ isActive: !isActive })
  }

  render() {
    const { rowId, name, isActive, itemCollapse, plusMsg } = this.state
    const itemCollapseClass = isActive ? `${itemCollapse} active` : itemCollapse
    const functionalArrow = isActive ? upArrow : downArrow
    const arrowMessage = isActive ? `${plusMsg}menos` : `${plusMsg}más` 

    return (
      <div key={`${rowId}-item-collapsible`} className={itemCollapseClass}>
        <div className="btn-collapse" onClick={this.onItemCollapsibleClick}>
          <div className="name">{name}</div>
          <div className="arrow">{arrowMessage}<img src={functionalArrow}/></div>
        </div>
        <div className="content-collapse">tableData</div>
      </div>
    )
  }
}

export default Row