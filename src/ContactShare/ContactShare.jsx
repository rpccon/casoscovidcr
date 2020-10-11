import React from 'react'
import "./ContactShare.sass"
import facebookIcon from "../Images/facebookicon.png"
import linkedinIcon from "../Images/linkedin.png"
import gmailIcon from "../Images/gmail.png"

const ContactShare = () => (
  <div className={"contact-information"}>
    <div className={"developed"}>
      <div className={"main-text"}>Desarrollado por: <span><a href="mailto:robertopccon@gmail.com">Roberto Salazar</a></span></div>
      <div className={"icons"}>
        <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/roberto.salazar.752"><img src={facebookIcon} alt="Facebook contact" /></a>
        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/roberto-salazar-mel%C3%A9ndez-49a58015b/"><img src={linkedinIcon} alt="Linkedin contact" /></a>
        <a href="mailto:robertopccon@gmail.com"><img src={gmailIcon} className={"gmail"} alt="Gmail contact" /></a>
      </div>
    </div>
    <div className={"share"}>
      <div className={"main-text"}>Compartir en:</div>
      <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/sharer.php?u=https%3A%2F%2Fcasoscovidcr.com"><img src={facebookIcon} alt="" /></a>
    </div>
  </div>
)

export default ContactShare