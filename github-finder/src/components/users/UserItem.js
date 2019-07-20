import React from "react";
import PropTypes from 'prop-types';

const UserItem = ({ user: { login, avatar_url, html_url }}) => {
  // constructor() {
  //   super();
  //   this.state = {
  //     id: "id",
  //     login: "mojombo",
  //     avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4",
  //     html_url: "https://github.com/mojombo"
  //   };
  // }
  // A constructor isn't needed in order to determine what the state is

  // state = {
  //   id: "id",
  //   login: "mojombo",
  //   avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4",
  //   html_url: "https://github.com/mojombo"
  // };

  return (
    <div className="card text-center">
      <img
        src={ avatar_url }
        className="round-img"
        style={{ width: "60px" }}
        alt=""
      />
      <h3>{ login }</h3>
      <div>
        <a href={ html_url } className="btn btn-dark btn-sm my-1">More</a>
      </div>
    </div>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired
}

export default UserItem;
