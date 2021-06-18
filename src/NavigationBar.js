import React, { Component } from 'react';
class NavigationBar extends Component {
    state = {  }
    render() { 
        return ( 
            <ul>
                <li>Home</li>
                <li>Courses</li>
                <li>Practice</li>
                <li>Events</li>
                <li>Campus Ninjas</li>
                <li>Blog</li>
                <li>My Classroom</li>               
            </ul>
         );
    }
}
 
export default NavigationBar;