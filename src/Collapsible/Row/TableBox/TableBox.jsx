import React, { Component } from 'react'
import "./TableBox.sass"

class TableBox extends Component {
  constructor(props) {
    super(props)

    this.state = {
      rowData: props.rowData
    }
  }

  render() {
    const {
      newcases,
      activecases,
      recoveredcases,
      deceasedcases,
      accumulatedcases,
      alerts
    } = this.state.rowData

    return (
      <div className={"table-box-container"}>
        <div className={"first-block"}>
          <div className={"data-set"}>
            <div className={"box-item"}>
              <div>Nuevos</div>
              <div>{newcases}</div>
            </div>
            <div className={"box-item"}>
              <div>Activos</div>
              <div>{activecases}</div>
            </div>
            <div className={"box-item"}>
              <div>Recuperados</div>
              <div>{recoveredcases}</div>
            </div>
          </div>
          <div className={"data-set"}>
            <div className={"box-item"}>
              <div>Fallecidos</div>
              <div>{deceasedcases}</div>
            </div>
            <div className={"box-item"}>
              <div>Acumulados</div>
              <div>{accumulatedcases}</div>
            </div>
          </div>
        </div>
        <div className={"second-block"}>
          <div className={"third-set"}>
            <div classNam={"box-item"}>
              <div>Permanece bajo alerta(s)</div>
                {alerts.map((item) => (
                  <div>
                    {item.alert}{item.desc ? ":" : ""} {item.desc}
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default TableBox