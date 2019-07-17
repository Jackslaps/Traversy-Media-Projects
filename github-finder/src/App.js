import React, { Component } from 'react';
import './App.css';
import Navbar from './components/layout/NavBar'
import UserItem from './components/users/UserItem'

class App extends Component {
    render() {
        //const numbers = [1,2,3,4,5];

        return (
            <div className='App'>
                {/* <Navbar title={numbers}/>*/} {/*This will create an error in the browser's console because the prop "title" is an array, */}
                                                 {/* but the requirement for the prop in Navbar.js is for strings only */}
                <Navbar />
                <UserItem />
            </div>
        )
    }
}

export default App;