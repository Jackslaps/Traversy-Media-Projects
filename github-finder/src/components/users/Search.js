import React, { useState, useContext } from "react";
import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext'

const Search = () => {
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);

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
      alertContext.setAlert("Please enter a search query", "light");
    } else {
      githubContext.searchUsers(text);
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
      {githubContext.users.length > 0 && (
        <button className="btn btl-light btn-block" onClick={githubContext.clearUsers}>
          Clear
        </button>
      )}
    </div>
  );
};

export default Search;

