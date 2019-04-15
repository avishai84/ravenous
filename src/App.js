import React, { Component } from 'react';
import './App.css';
import Business from './components/Business/Business';
import BusinessList from './components/BusinessList/BusinessList';
import SearchBar from './components/SearchBar/SearchBar';
const business = {
  imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
  name: 'MarginOtto Pizzeria',
  address: '1010 Paddington Way',
  city: 'Flavortown',
  state: 'NY',
  zipCode: '10101',
  category: 'Italian',
  rating: 4.5,
  reviewCount: 90
};
const businesses = [
  business, business, business, business, business, business
];

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      term:'',
      location:'',
      sortBy:''
    }
    this.searchYelp = this.searchYelp.bind(this);
}

searchYelp(term, location, sortBy){
    this.setState({
      term:term,
      location:location,
      sortBy:sortBy
    })
}

  render() {
    console.log(`Searching Yelp with ${this.state.term}, ${this.state.location}, ${this.state.sortBy}`);
    return (
    <div className="App">
      <h1>ravenous</h1>
        <SearchBar searchyelp={this.searchYelp}/>
        <BusinessList businesses={businesses}/>
    </div>
    );
  }
}

export default App;
