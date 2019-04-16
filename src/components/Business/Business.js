import React from 'react';
import './Business.css';

class Business extends React.Component {
    constructor(props){
        super(props);
        this.state={
            business: this.props.businesses
        }
    }
    render() {
      return (
        <div className="Business" >
            <div className="image-container">
                <img src={this.state.business.imageSrc} alt={this.state.business.name} />
            </div>  
                <h2>{this.state.business.name}</h2>
                <div className="Business-information">
                <div className="Business-address">
                    <p>{this.state.business.address}</p>
                    <p>{this.state.business.city}</p>
                    <p>{this.state.business.state} {this.state.business.zipCode}</p>
                </div>
                <div className="Business-reviews">
                    <h3>{this.state.business.category}</h3>
                    <h3 className="rating">{this.state.business.rating} stars</h3>
                    <p>{this.state.business.reviewCount} reviews</p>
                </div>
            </div>
        </div>
      );
    }
}
export default Business;