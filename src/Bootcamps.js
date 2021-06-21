import React, { Component } from 'react';
import DateRangeSharpIcon from '@material-ui/icons/DateRangeSharp';
import AirplaySharpIcon from '@material-ui/icons/AirplaySharp';
import CodeSharpIcon from '@material-ui/icons/CodeSharp';
import LiveTvSharpIcon from '@material-ui/icons/LiveTvSharp';
import VideocamSharpIcon from '@material-ui/icons/VideocamSharp';
import './Events.css';
import axios from 'axios';
import {Link} from 'react-router-dom';

class Bootcamps extends Component {
    state = { 
        events:[]
     };
     async componentDidMount(){
        const url = "https://api.codingninjas.com/api/v3/events?event_category=BOOTCAMP_EVENT&event_sub_category=Upcoming&tag_list=&offset=0";
        const response = await axios.get(url);
        const data = response.data;
        const datl2 = data.data
       //  console.log(data);
        const arr = datl2.events;
       //  console.log(arr);
        this.setState({events:arr});
        console.log(this.state.events);
    }
    render() { 
        return ( 
            <div className="events">
                <nav className="nav1 ml-auto">
                    <ul className="nav1-content ">
                        <Link to='/'>
                            <li>
                                <DateRangeSharpIcon/>
                                <a> All Events</a>
                            </li>
                        </Link>
                        <Link to='/webinars'>
                            <li>
                                <LiveTvSharpIcon/>
                                <a>Webinars</a>
                            </li>
                        </Link>
                        <Link to="/coding-events">
                            <li>
                                <CodeSharpIcon/>
                                <a> Coding Events</a>
                            </li>
                        </Link>
                        <Link to='/bootcamps'>
                            <li>
                                <AirplaySharpIcon/>
                                <a>Bootcamps</a>
                            </li>
                        </Link>
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
                <div className="container-fluid mt-4">
                    <div className="row">
                        {this.state.events.length === 0 &&(
                            <div style={{textAlign:'center'}}>
                                <h3>No Events found</h3>
                            </div>
                        )}
                    </div>
                </div>   
            </div>
         );
    }
}
 
export default Bootcamps;