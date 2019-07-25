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

  async componentDidMount() {
		this.setState({ loading: true });

		const res = await axios.get(`https://api.github.com/users?client_id=${ process.env.REACT_APP_GITHUB_CLIENT_ID }&client_secret=${ process.env.REACT_APP_GITHUB_CLIENT_ID }`);
		
		this.setState({ users: res.data, loading: false })
    console.log(res.data);
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
          <Search />
          <Users loading={ this.state.loading } users={ this.state.users }/>
        </div>
        {/* <UserItem /> */}
      </div>
    );
  }
}

export default App;
