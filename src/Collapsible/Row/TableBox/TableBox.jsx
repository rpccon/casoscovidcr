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
        { title: "Nuevos", result: newcases, class: "news" },
        { title: "Activos", result: activecases, class: "active" },
        { title: "Recuperados", result: recoveredcases, class: "recovered" }
      ],
      [
        { title: "Fallecidos", result: deceasedcases, class: "killed" },
        { title: "Acumulados", result: accumulatedcases, class: "accumulated" }
      ]
    ]

    return (
      <div className={"table-box-container"}>
        <div className={"first-block"}>
          {arrayData.map((setItem) => (
            <div key={`${uniqid()}-set`} className={"data-set"}>
              {setItem.map((boxItem) => (
                <div key={`${uniqid()}-box`} className={`box-item ${boxItem.class}`}>
                  <div className="title">{boxItem.title}</div>
                  <div className="result">{boxItem.result}</div>
                </div>
              ))}
            </div>
          ))}
        </div>
        {alerts.length > 0
          &&
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
        }
      </div>
    )
  }
}

export default TableBox