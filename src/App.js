import React, { Component } from 'react';
import './App.css';
import Business from './components/Business/Business';
import BusinessList from './components/BusinessList/BusinessList';
import SearchBar from './components/SearchBar/SearchBar';

class App extends Component {
  render() {
    return (
    <div className="App">
      <h1>ravenous</h1>
 
        <SearchBar/>


    </div>
    );
  }
}

export default App;
