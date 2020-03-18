import React from "react";
import "./styles/BadgesList.css";

class BadgesListItem extends React.Component {
  render() {
    return (
      <div className="BadgesListItem">
        <img
          className="BadgesListItem__avatar"
          src={this.props.badge.avatarUrl}
          alt={`${this.props.badge.firstName} ${this.props.badge.lastName}`}
        />

        <div>
          <strong>
            {this.props.badge.firstName} {this.props.badge.lastName}
          </strong>
          <div className="SocialUser__name">
            <br />
            <span className="SocialUser__logo" />@{this.props.badge.socialUser}
            <br />
          </div>

          {this.props.badge.jobTitle}
        </div>
      </div>
    );
  }
}

class BadgesList extends React.Component {
  render() {
    return (
      <div className="BadgesList">
        <ul className="list-unstyled">
          {this.props.badges.map(badge => {
            return (
              <li key={badge.id}>
                <BadgesListItem badge={badge} />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default BadgesList;
