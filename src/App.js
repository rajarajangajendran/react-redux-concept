import logo from './logo.svg';
import './App.css';
import NewComp from './NewComp'
import { Component } from 'react';

class App extends Component {
  styles = {
    fontStyle: 'bold',
    color: 'green'
  };

  render() {
    return (
      <div className='App'>
          <h3 style={this.styles}> Welcome </h3>
          <NewComp />
      </div>
    )
  }
}

export default App;
