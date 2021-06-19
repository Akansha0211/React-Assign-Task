import React, { Component } from 'react';
import pic from './assets/images.jpg';
import './Banner.css';

class Banner extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="banner-section">
                <img className="banner-section-image" src={pic} alt="Banner"></img>
                <div className="banner-text">
                    <h1 className="first-text">Events & News</h1>
                    <h5 >Learn, Compete & Grow</h5>
                </div>
            </div>
         );
    }
}
 
export default Banner;