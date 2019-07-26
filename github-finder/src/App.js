import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/layout/NavBar";
//import UserItem from './components/users/UserItem'
import Users from "./components/users/Users";
import Search from "./components/users/Search"
import axios from "axios";

class App extends Component {
  state = {
    users: [],
    loading: false
  };

  // This will load up a large list of profiles as part of the state at first
  // async componentDidMount() {
	// 	this.setState({ loading: true });

	// 	const res = await axios.get(`https://api.github.com/users?client_id=${ process.env.REACT_APP_GITHUB_CLIENT_ID }&client_secret=${ process.env.REACT_APP_GITHUB_CLIENT_ID }`);
		
	// 	this.setState({ users: res.data, loading: false })
  //   console.log(res.data);
  // }

  // Search Github Users -> On search, will display profile link of Github account being searched for
  searchUsers = async text => {
    this.setState({ loading: true })
    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${ process.env.REACT_APP_GITHUB_CLIENT_ID }&client_secret=${ process.env.REACT_APP_GITHUB_CLIENT_ID }`);
		
		this.setState({ users: res.data.items, loading: false })
  }

  render() {
    //const numbers = [1,2,3,4,5];

    return (
      <div className="App">
        {/* <Navbar title={numbers}/>*/}{" "}
        {/*This will create an error in the browser's console because the prop "title" is an array, */}
        {/* but the requirement for the prop in Navbar.js is for strings only */}
        <Navbar />
        <div className="container">
          <Search searchUsers={ this.searchUsers }/>
          <Users loading={ this.state.loading } users={ this.state.users }/>
        </div>
        {/* <UserItem /> */}
      </div>
    );
  }
}

export default App;
