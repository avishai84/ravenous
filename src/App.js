import React, { Component } from 'react';
import './App.css';
import BusinessList from './components/BusinessList/BusinessList';
import SearchBar from './components/SearchBar/SearchBar';
import Yelp from './util/Yelp';

// export const business = {
//   imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
//   name: 'MarginOtto Pizzeria',
//   address: '1010 Paddington Way',
//   city: 'Flavortown',
//   state: 'NY',
//   zipCode: '10101',
//   category: 'Italian',
//   rating: 4.5,
//   reviewCount: 90
// };
// const businesses = [
//   business, business, business, business, business, business
// ];

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      businesses: {}
    }
    this.searchYelp = this.searchYelp.bind(this);
}

searchYelp(term ='pizza', location='new york', sortBy='best_match'){
  Yelp.search(term, location, sortBy).then((response) => {
    this.setState({
        businesses:{response}
      })
    }
  )}

  render() {
   
    return (
    <div className="App">
      <h1>ravenous</h1>
        <SearchBar searchyelp={this.searchYelp} />
        <BusinessList businesses={this.state.businesses}/>
    </div>
    );
  }
}

export default App;
