import React, { Component } from 'react';
import DateRangeSharpIcon from '@material-ui/icons/DateRangeSharp';
import AirplaySharpIcon from '@material-ui/icons/AirplaySharp';
import CodeSharpIcon from '@material-ui/icons/CodeSharp';
import LiveTvSharpIcon from '@material-ui/icons/LiveTvSharp';
import VideocamSharpIcon from '@material-ui/icons/VideocamSharp';
import './Events.css';

class Events extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="events">
                <nav className="nav1 ml-auto">
                    <ul className="nav1-content ">
                        <li>
                        <DateRangeSharpIcon/>
                        <a href="events-all"> All Events</a>
                        </li>
                        <li>
                        <LiveTvSharpIcon/>
                        <a href="webinars">Webinars</a>
                        </li>
                        <li>
                        <CodeSharpIcon/>
                        <a href="coding-events"> Coding Events</a>
                        </li>
                        <li>
                        <AirplaySharpIcon/>
                        <a href="bootcamps">Bootcamps</a>
                        </li>
                        <li>
                        <VideocamSharpIcon/>
                        <a href="workshops">Workshop</a>
                        </li>
                    </ul>
                </nav>
                <nav className="nav2 ml-auto mt-1">
                    <ul className="nav2-content">
                        <li>
                            <a href="#upcoming">Upcoming</a>
                        </li>
                        <li>
                            <a href="#archived">Archived</a>
                        </li>
                        <li>
                            <a href="#all-time-fav">All Time Favourites</a>
                        </li>
                    </ul>
                </nav>
            </div>
         );
    }
}
 
export default Events;