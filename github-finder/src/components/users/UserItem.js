import React, { Component } from "react";

class UserItem extends Component {
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

  render() {
    const { login, avatar_url, html_url } = this.props.user;

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
  }
}

export default UserItem;
