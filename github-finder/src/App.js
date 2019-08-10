import React, { Fragment, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/layout/NavBar";
//import UserItem from './components/users/UserItem'
import Users from "./components/users/Users";
import User from "./components/users/User";
import Search from "./components/users/Search";
import axios from "axios";
import Alert from "./components/layout/Alert";
import About from "./components/pages/About";

import GithubState from "./context/github/GithubState";

const App = () => {
  // This replaces the state object below
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);

  // state = {
  //   users: [],
  //   user: {},
  //   repos: [],
  //   loading: false,
  //   alert: null,
  // };

  // This will load up a large list of profiles as part of the state at first
  // async componentDidMount() {
  // 	this.setState({ loading: true });

  // 	const res = await axios.get(`https://api.github.com/users?client_id=${ process.env.REACT_APP_GITHUB_CLIENT_ID }&client_secret=${ process.env.REACT_APP_GITHUB_CLIENT_ID }`);

  // 	this.setState({ users: res.data, loading: false })
  //   console.log(res.data);
  // }

    setUsers(res.data.items);
    setLoading(false);
    // this.setState({ users: res.data.items, loading: false });
  };

  // Get a single Github user
  const getUser = async username => {
    setLoading(true);
    // this.setState({ loading: true });

    const res = await axios.get(
      `https://api.github.com/users/${username}?client_id=${
        process.env.REACT_APP_GITHUB_CLIENT_ID
      }&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_ID}`
    );

    setUser(res.data);
    setLoading(false);
    // this.setState({ user: res.data, loading: false });
  };

  //Get user's repos
  const getUserRepos = async username => {
    setLoading(true);
    // this.setState({ loading: true });

    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${
        process.env.REACT_APP_GITHUB_CLIENT_ID
      }&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_ID}`
    );

    setRepos(res.data);
    setLoading(false);
    // this.setState({ repos: res.data, loading: false });
  };

  // Clear users from the state
  const clearUsers = () => {
    setUsers([]);
    setLoading(false);
  };
  // clearUsers = () => this.setState({ users: [], loading: false });

  // Set Alert
  const showAlert = (msg, type) => {
    setAlert({ msg, type });
    // this.setState({ alert: { msg, type } });

    setTimeout(() => setAlert(null), 1500);
    // setTimeout(() => this.setState({ alert: null }), 1500);
  };

  // const { users, user, repos, loading } = this.state;

  return (
    <GithubState>
      <Router>
        <div className="App">
          {/* <Navbar title={numbers}/>*/}{" "}
          {/*This will create an error in the browser's console because the prop "title" is an array, */}
          {/* but the requirement for the prop in Navbar.js is for strings only */}
          <Navbar />
          <div className="container">
            <Alert alert={alert} />
            <Switch>
              <Route
                exact
                path="/"
                render={props => (
                  <Fragment>
                    <Search
                      clearUsers={clearUsers}
                      showClear={users.length > 0 ? true : false}
                      setAlert={showAlert}
                    />
                    <Users loading={loading} users={users} />
                  </Fragment>
                )}
              />
              <Route exact path="/about" component={About} />
              <Route
                exact
                path="/user/:login"
                render={props => (
                  <User
                    {...props}
                    getUser={getUser}
                    getUserRepos={getUserRepos}
                    user={user}
                    repos={repos}
                    loading={loading}
                  />
                )}
              />
            </Switch>
          </div>
          {/* <UserItem /> */}
        </div>
      </Router>
    </GithubState>
  );
};

export default App;

