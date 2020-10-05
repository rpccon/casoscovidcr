import React, { Component } from 'react'
import "./TableBox.sass"
import uniqid from "uniqid"

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

    const arrayData = [
      [
        { title: "Nuevos", result: newcases },
        { title: "Activos", result: activecases },
        { title: "Recuperados", result: recoveredcases }
      ],
      [
        { title: "Fallecidos", result: deceasedcases },
        { title: "Acumulados", result: accumulatedcases }
      ]
    ]

    return (
      <div className={"table-box-container"}>
        <div className={"first-block"}>
          {arrayData.map((setItem) => (
            <div key={`${uniqid()}-set`} className={"data-set"}>
              {setItem.map((boxItem) => (
                <div key={`${uniqid()}-box`} className={"box-item"}>
                  <div className="title">{boxItem.title}</div>
                  <div className="result">{boxItem.result}</div>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className={"second-block"}>
          <div className={"third-set"}>
            <div className={"box-item"}>
              <div>Permanece bajo alerta(s)</div>
                {alerts.map((item) => (
                  <div key={uniqid()}>
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