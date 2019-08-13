import React, { Fragment, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/layout/NavBar";
//import UserItem from './components/users/UserItem'
import Users from "./components/users/Users";
import User from "./components/users/User";
import Search from "./components/users/Search";
import Alert from "./components/layout/Alert";
import About from "./components/pages/About";

import GithubState from "./context/github/GithubState";

const App = () => {
  // This replaces the state object below
  const [alert, setAlert] = useState(null);

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
                      setAlert={showAlert}
                    />
                    <Users />
                  </Fragment>
                )}
              />
              <Route exact path="/about" component={About} />
              <Route
                exact
                path="/user/:login"   
                component={User}   
              />
            </Switch>
          </div>
        </div>
      </Router>
    </GithubState>
  );
};

export default App;

