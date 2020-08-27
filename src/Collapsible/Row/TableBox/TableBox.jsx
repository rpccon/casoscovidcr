import React, { Component } from 'react'

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
          <div className={"first-set"}>
            <div classNam={"box-item"}>
              <div>Casos Nuevos</div>
              <div>{newcases}</div>
            </div>
            <div classNam={"box-item"}>
              <div>Casos Activos</div>
              <div>{activecases}</div>
            </div>
          </div>
          <div className={"second-set"}>
            <div classNam={"box-item"}>
              <div>Casos Recuperados</div>
              <div>{recoveredcases}</div>
            </div>
            <div classNam={"box-item"}>
              <div>Casos Fallecidos</div>
              <div>{deceasedcases}</div>
            </div>
          </div>
        </div>
        <div className={"second-block"}>
          <div className={"third-set"}>
            <div classNam={"box-item"}>
              <div>Casos Acumulados</div>
              <div>{accumulatedcases}</div>
            </div>
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