import React from 'react';
import './BusinessList.css';
import Business from '../Business/Business';

class BusinessList extends React.Component {
    constructor(props){
        super(props);
        this.state={
            businesses: {},
            updated : 'false'
        }
    }
    componentDidUpdate(prevProps) {
        // Typical usage (don't forget to compare props):
        if (this.props.businesses !== prevProps.businesses) {
                this.setState({
                    businesses: this.props.businesses.response,
                    updated : 'true'
                });
            }
        }

    render() {

      return (
        <div className="BusinessList">
            {
                this.state.updated === 'true' ?  this.state.businesses.map((business, i) =>{
                        return <Business key={business.id} businesses={business} />;
                    }) :  '' 
            }
        </div>
      );
    }
}
export default BusinessList;