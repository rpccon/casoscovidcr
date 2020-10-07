import React, { Component } from 'react'
import "./ContactShare.sass"
import facebookIcon from "../Images/facebookicon.png"
import linkedinIcon from "../Images/linkedin.png"
import uniqid from "uniqid"

class ContactShare extends Component {
  constructor(props) {
    super(props)

    this.state = {
    }
  }

  render() {
    return (
      <div className={"contact-information"}>
        <div className={"developed"}>
          <div className={"main-text"}>Desarrollado por: <span><a href="mailto:robertopccon@gmail.com">Roberto Salazar</a></span></div>
          <div className={"icons"}>
            <a target="_blank" href="https://www.facebook.com/roberto.salazar.752"><img src={facebookIcon}/></a>
            <a target="_blank" href="https://www.linkedin.com/in/roberto-salazar-mel%C3%A9ndez-49a58015b/"><img src={linkedinIcon}/></a>
          </div>
        </div>
        <div className={"share"}>
          <div className={"main-text"}>Compartir en:</div>
          <a target="_blank" href="https://www.facebook.com/sharer.php?u=https%3A%2F%2Fcasoscovidcr.com"><img src={facebookIcon}/></a>
        </div>
      </div>
    )
  }
}

export default ContactShare