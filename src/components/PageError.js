import React from "react";
import "./styles/PageError.css";

class PageError extends React.Component {
  render() {
    return (
      <div className="PageError">
        <h3 className="text-danger">Error: {this.props.error}</h3>
      </div>
    );
  }
}

export default PageError;
