import React, { Component } from 'react'
import downArrow from "../../Images/icon_arrow-down.png"
import upArrow from "../../Images/icon_arrow-up.png"
import TableBox from "./TableBox/TableBox"

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
      rowData 
    }
  }

  onItemCollapsibleClick = (context) => {
    const { isActive } = this.state

    this.setState({ isActive: !isActive })
  }

  render() {
    const { rowId, name, isActive, itemCollapse, rowData } = this.state
    let itemCollapseClass = itemCollapse
    let functionalArrow

    if(isActive) {
      itemCollapseClass = `${itemCollapse} active`
      functionalArrow = upArrow
    } else {
      functionalArrow = downArrow
    }

    return (
      <div key={`${rowId}-item-collapsible`} className={itemCollapseClass}>
        <div className={"btn-collapse"} onClick={this.onItemCollapsibleClick}>
          <div className="name">{name}</div>
          <div className="arrow"><img src={functionalArrow} alt="" /></div>
        </div>
        <div className="content-collapse">
          <TableBox rowData={rowData} />
        </div>
      </div>
    )
  }
}

export default Row