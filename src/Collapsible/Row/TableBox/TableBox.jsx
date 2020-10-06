import React, { Component } from 'react'
import "./TableBox.sass"
import uniqid from "uniqid"

class TableBox extends Component {
  constructor(props) {
    super(props)

    this.state = {
      rowData: props.rowData,
      keepAlert: "Permanece bajo alerta"
    }
  }

  addPlural = (size) => size > 1 ? "s" : ""

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
          <div className={"title"}>{`${this.state.keepAlert}${this.addPlural(alerts.length)}`}</div>
          <div className={"alerts-set"}>
            {alerts.map((alertItem) => (
              <div key={uniqid()} className={"alert-item"}>
                <div className={"title"}>
                  {`${alertItem.alert.charAt(0).toUpperCase()}${alertItem.alert.slice(1)}`}
                </div>
                <div className={`dot ${alertItem.alert}`}></div>
                {
                  alertItem.desc
                  && <div className={"desc"}>{alertItem.desc}</div>
                }
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default TableBox