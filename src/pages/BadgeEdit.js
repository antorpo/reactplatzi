import React from "react";
import header from "../images/platziconf-logo.svg";
import "./styles/BadgeNew.css";
import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm";
import Loader from "../components/Loader";
import api from "../api";
import { Link } from "react-router-dom";
import PageError from "../components/PageError";

class BadgeEdit extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    form: {
      firstName: "",
      lastName: "",
      email: "",
      jobTitle: "",
      socialUser: ""
    },
    loading: true,
    error: null
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    this.setState({
      loading: true,
      error: null
    });

    try {
      const data = await api.badges.read(this.props.match.params.badgeId);

      this.setState({
        loading: false,
        form: data
      });
    } catch (error) {
      this.setState({
        loading: false,
        error: error
      });
    }
  };

  handleSubmit = async e => {
    e.preventDefault();
    this.setState({
      loading: true,
      error: null
    });

    try {
      await api.badges.update(this.props.match.params.badgeId, this.state.form);

      this.setState({
        loading: false,
        form: []
      });

      // Redirigir al usuario:
      this.props.history.push("/badges");
    } catch (error) {
      this.setState({
        loading: false,
        error: error,
        form: []
      });
    }
  };

  handleChange = e => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    });
  };

  render() {
    if (this.state.loading) {
      return <Loader />;
    }

    if(this.state.error){
      return <PageError error={this.state.error.message} />;
    }

    return (
      <React.Fragment>
        <div className="BadgeNew__hero">
          <img
            className="BadgeNew__hero-image img-fluid"
            src={header}
            alt="Logo"
          />
        </div>

        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge
                firstName={this.state.form.firstName || "First Name"}
                lastName={this.state.form.lastName || "Last Name"}
                jobTitle={this.state.form.jobTitle || "Job Title"}
                socialUser={this.state.form.socialUser || "Twitter"}
                email={this.state.form.email || "Email"}
                avatarUrl="https://es.gravatar.com/avatar?d=identicon"
              />
              <Link className="btn btn-primary" to="/badges">
                Badges
              </Link>
            </div>

            <div className="col-6">
              <h1>Edit Attendant</h1>
              <BadgeForm
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                formValues={this.state.form}
                error={this.state.error}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default BadgeEdit;
