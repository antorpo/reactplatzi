import React from "react";
import "./styles/Badges.css";
import confLogo from "../images/badge-header.svg";
import BadgesList from "../components/BadgesList";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";
import PageError from "../components/PageError";
import api from "../api";

class Badges extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      error: null,
      data: []
    };

    console.log("1. Constructor");
    this.fetchData = this.fetchData.bind(this);
    this.toggleButton = this.toggleButton.bind(this);
  }

  // Se ejecuta despues de renderizar la primera vez.
  componentDidMount() {
    console.log("3. componentDidMount");
    this.fetchData();
  }

  fetchData = async () => {
    // Para que se sepa que esta cargando.
    this.setState({
      loading: true,
      error: null
    });

    try {
      const data = await api.badges.list();

      this.setState({
        loading: false,
        error: null,
        data: data
      });
    } catch (error) {
      this.setState({
        loading: false,
        error: error
      });
    }
  };

  // Se ejecuta luego de una actualizacion.
  componentDidUpdate(prevProps, prevState) {
    console.log("5. componentDidUpdate");
    console.log({
      prevProps: prevProps,
      prevState: prevState
    });

    console.log({
      props: this.props,
      state: this.state
    });
  }

  // El componente sale de escena, sirve para limpiar memoria.
  componentWillUnmount() {
    console.log("6. componentWillUnmount");
  }

  toggleButton(){
    this.fetchData();
  }

  render() {
    console.log("2/4. Render");
    if (this.state.loading === true) {
      return <Loader />;
    }

    if (this.state.error) {
      return <PageError error={this.state.error.message} />;
    }

    return (
      <React.Fragment>
        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container">
              <img
                className="Badges_conf-logo"
                src={confLogo}
                alt="Conf Logo"
              />
            </div>
          </div>
        </div>

        <div className="Badges__container">
          <div className="Badges__buttons row">
            <Link to="/badges/new" className="btn btn-primary">
              New Badge
            </Link>
            <button className="btn btn-primary" onClick={this.toggleButton}>
              Refresh    
            </button>
          </div>

          <div className="Badges__list">
            <div className="Badges__container">
              <BadgesList badges={this.state.data} />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Badges;
