import React, { Fragment, Component } from 'react';
import './App.css';

class App extends Component {
  foo2 = () => "Bars";

  render() {
    const name = 'John Doe';
    const foo = () => "Bar";
    const loading = false;
    const showName = true;

    //if(loading) return <h4>Loading...</h4>

    return (
      // <Fragment>
      //  <h1>Hello</h1>
      //  <h2>Goodbye</h2>
      // </Fragment>

      <div className='App'>
        { loading ? <h4>Loading...</h4> :
          //<h1>Hello, { showName ? name : null }!</h1>   <---- Ternary within a ternary
          <h1>Hello, { showName && name }</h1> // Double ampersand works the same way 
          //<h3>Goodbye { foo() }</h3>
          //<h3>Goodbye again { this.foo2() } </h3>
        }
      </div>
    );

    // render() {
    //   return React.createElement (
    //     'div', 
    //     { className: 'App'}, 
    //     React.createElement('h1', null, 'Hello!')
    //     ^^^This is how it's rendered without JSX^^^
    //   )
    // }
  }  
}

export default App;
