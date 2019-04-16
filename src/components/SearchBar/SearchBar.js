import React from 'react';
import './SearchBar.css';

const sortByOptions = {
    'Best Match':'best_match',
    'Highest Rated':'rating',
    'Most Reviewed':'review_count'
};

class SearchBar extends React.Component {
    constructor(props){
        super(props);
        this.state={
            searchyelp: this.props.searchyelp(),
                term: '',
                location: '',
                sortBy: 'best_match'
        }
        this.renderSortByOptions = this.renderSortByOptions.bind(this);
        this.getSortByClass = this.getSortByClass.bind(this);
        this.handleSortByChange = this.handleSortByChange.bind(this);
        this.handleTermChange = this.handleTermChange.bind(this);
        this.handleLocationChange = this.handleLocationChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    renderSortByOptions(){
        return Object.keys(sortByOptions).map((sortByOption,i) => {
               let sortByOptionValue = sortByOptions[sortByOption];
            return <li onClick={this.handleSortByChange} className={this.getSortByClass(sortByOptionValue)} key={'key_'+i}>{sortByOption}</li>;
       });
     }
     getSortByClass(sortByOption){
        if(this.state.sortBy === sortByOption ){
            return 'active';
        }
        return '';
    }
    handleSortByChange(e){
        let sortByOptionText = e.target.textContent;
        this.setState({
            sortBy: sortByOptions[sortByOptionText]
        })
    }
    handleTermChange(e){
        let term = e.target.value;
        this.setState({
             term: term 
        })
    }
    handleLocationChange(e){
        let location = e.target.value;
        this.setState({
            location:location  
        })
    }
    handleSearch(e){
         let term = this.state.term;
         let location = this.state.location;
         let sortBy = this.state.sortBy;
            this.setState({
                searchyelp: this.props.searchyelp(term, location, sortBy)
            })
            e.preventDefault();

    }
    render(){

        return(
            <div className="SearchBar" searchyelp={this.props.searchYelp}>
                <div className="SearchBar-sort-options">
                    <ul>
                        {this.renderSortByOptions()}
                    </ul>
                </div>
                <div className="SearchBar-fields">
                    <input onChange={this.handleTermChange} placeholder="Search Businesses" />
                    <input onChange={this.handleLocationChange} placeholder="Where?" />
                </div>
                <div className="SearchBar-submit">
                    <a href="#" onClick={this.handleSearch}>Let's Go</a>
                </div>
            </div>
        );
    }
}
export default SearchBar;