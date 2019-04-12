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
            searchBar:{
                term:'',
                location:'',
                sortBy:'best_match'}
        }
        this.renderSortByOptions = this.renderSortByOptions.bind(this);
        this.getSortByClass = this.getSortByClass.bind(this);
        this.handleSortByChange = this.handleSortByChange.bind(this);
        this.handleTermChange = this.handleTermChange.bind(this);
        this.handleLocationChange = this.handleLocationChange.bind(this);
    }

    renderSortByOptions(){
        // console.log(sortByOptions);
        return Object.keys(sortByOptions).map((sortByOption,i) => {
             console.log(sortByOptions[sortByOption]);
               let sortByOptionValue = sortByOptions[sortByOption];
            // console.log(sortByOptionValue);
            return <li onClick={this.handleSortByChange} className={this.getSortByClass(sortByOptionValue)} key={'key_'+i}>{sortByOption}</li>;
       });
     }
     getSortByClass(sortByOption){
        if(this.state.sortBy == sortByOption ){
            return 'active';
        }
        return '';
    }
    handleSortByChange(sortByOption){
        console.log(sortByOption);
        this.setState({
            sortBy: sortByOption
        })
    }
    handleTermChange(e){
        let term = e.target.value;
        this.setState({
            term: {term}
        })
    }
    handleLocationChange(e){
        let location = e.target.value;
        this.setState({
            location: {location}        
        })
    }
    render(){
        return(
            <div className="SearchBar">
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
                    <a>Let's Go</a>
                </div>
            </div>
        );
    }
}
export default SearchBar;