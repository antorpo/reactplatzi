import React from "react";
import Navbar from "../components/Navbar";
import header from "../images/badge-header.svg";
import "./styles/BadgeNew.css";
import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm";

class BadgeNew extends React.Component {
  state = { form: {
    firstName: '',
    lastName: '',
    email: '',
    jobTitle: '',
    socialUser: ''
  }};

    handleChange = e => {
      this.setState({
        form: {
          ...this.state.form,
          [e.target.name]: e.target.value
        }
      });
    };

  render() {
    return (
      <React.Fragment>
        <div className="BadgeNew__hero">
          <img className="img-fluid" src={header} alt="Logo" />
        </div>

        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge
                firstName={this.state.form.firstName}
                lastName={this.state.form.lastName}
                jobTitle={this.state.form.jobTitle}
                socialUser={this.state.form.socialUser}
                email={this.state.form.email}
                avatarUrl="https://es.gravatar.com/avatar?d=identicon"
              />
            </div>

            <div className="col-6">
                <BadgeForm onChange={this.handleChange} formValues={this.state.form}/> 
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default BadgeNew;
