import React from "react";
import "./styles/BadgeDetails.css";
import Loader from "../components/Loader";
import api from "../api";
import PageError from "../components/PageError";
import BadgeDetails from "./BadgeDetails";

class BadgeDetailsContainer extends React.Component {
  state = {
    loading: true,
    error: null,
    data: undefined,
    modalIsOpen: false
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

  handleOpenModal = e => {
    this.setState({ modalIsOpen: true });
  };

  handleCloseModal = e => {
    this.setState({ modalIsOpen: false });
  };

  handleDeleteBadge = async () => {
    this.setState({
      loading: true,
      error: null
    });

    try{

      await api.badges.remove(this.props.match.params.badgeId);

      this.setState({
        loading: false
      });

      this.props.history.push("/badges");

    }catch(error){
      this.setState({
        loading: false,
        error: error
      });
    }
  };

  render() {
    if (this.state.loading) {
      return <Loader />;
    }

    if (this.state.error) {
      return <PageError error={this.state.error.message} />;
    }

    const badge = this.state.data;

    return (
      <BadgeDetails
        onCloseModal={this.handleCloseModal}
        onOpenModal={this.handleOpenModal}
        modalIsOpen={this.state.modalIsOpen}
        onDeleteBadge = {this.handleDeleteBadge}
        badge={badge}
      />
    );
  }
}

export default BadgeDetailsContainer;
