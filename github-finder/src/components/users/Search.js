import React, { Component } from "react";

export class Search extends Component {
  state = {
    text: ""
  };

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value});
  }

  onSubmit = (event) => {
      event.preventDefault();
      console.log(this.state.text)
  }

  render() {
    return (
      <div>
        <form onSubmit={ this.onSubmit } className="form">
          <input
            type="text"
            name="text"
            placeholder="Search User"
            value={this.state.text}
            onChange={ this.onChange }
          />
          <input
            type="submit"
            value="search"
            className="btn btn-dark btn-block"
          />
        </form>
      </div>
    );
  }
}

export default Search;

