import React from "react";
import confLogo from "../images/badge-header.svg";
import "./styles/Badge.css";
import Gravatar from "../components/Gravatar";

/* Props: Agregar parametros para hacer nuestros
   componentes dinamicos y reutilizables.
*/

class Badge extends React.Component {
  render() {
    const firstName = this.props.firstName;
    const lastName = this.props.lastName;
    const jobTitle = this.props.jobTitle;
    const socialUser = this.props.socialUser;
    
    return (
      <div className="Badge">
        <div className="Badge__header">
          <img src={confLogo} alt="Logo conferencia"></img>
        </div>

        <div className="Badge__section-name">
          <Gravatar
            className="Badge__avatar"
            email={this.props.email}
            alt="Avatar"
          />
          <h1>
            {firstName} <br /> {lastName}
          </h1>
        </div>

        <div className="Badge__section-info">
          <h3>{jobTitle}</h3>
          <div>@{socialUser}</div>
        </div>

        <div className="Badge__footer">#platziconf</div>
      </div>
    );
  }
}

export default Badge;
