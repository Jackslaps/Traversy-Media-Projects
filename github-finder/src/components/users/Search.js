import React, { useState } from "react";
import PropTypes from "prop-types";

const Search = ({ searchUsers, showClear, clearUsers, setAlert }) => {
  const [text, setText] = useState('');
  
  // state = {
  //   text: ""
  // };

  const onChange = event => {
    // this.setState({ [event.target.name]: event.target.value });
    setText(event.target.value);
  };

  const onSubmit = event => {
    event.preventDefault();

    if (text === "") {
      setAlert("Please enter a search query", "light");
    } else {
      searchUsers(text);
      setText('');
    }
  };

  // const { showClear, clearUsers } = this.props;
  return (
    <div>
      <form onSubmit={onSubmit} className="form">
        <input
          type="text"
          name="text"
          placeholder="Search User"
          value={text}
          onChange={onChange}
        />
        <input
          type="submit"
          value="search"
          className="btn btn-dark btn-block"
        />
      </form>
      {showClear && (
        <button className="btn btl-light btn-block" onClick={clearUsers}>
          Clear
        </button>
      )}
    </div>
  );
};

Search.propTypes = {
  searchUsers: PropTypes.func.isRequired,
  clearUsers: PropTypes.func.isRequired,
  showClear: PropTypes.bool.isRequired,
  setAlert: PropTypes.func.isRequired
};

export default Search;

