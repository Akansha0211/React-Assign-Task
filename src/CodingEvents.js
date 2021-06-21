import React, { Component } from 'react';
import DateRangeSharpIcon from '@material-ui/icons/DateRangeSharp';
import AirplaySharpIcon from '@material-ui/icons/AirplaySharp';
import CodeSharpIcon from '@material-ui/icons/CodeSharp';
import LiveTvSharpIcon from '@material-ui/icons/LiveTvSharp';
import VideocamSharpIcon from '@material-ui/icons/VideocamSharp';
import './Events.css';
import axios from 'axios';
import {Link} from 'react-router-dom';

class CodingEvents extends Component {
    state = { 
        events:[]
     };
    async componentDidMount(){
        const url = "https://api.codingninjas.com/api/v3/events?event_category=CODING_EVENT&event_sub_category=Upcoming&tag_list=&offset=0";
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
                        <Link to='/coding-events'>
                            <li>
                                <CodeSharpIcon/>
                                <a> Coding Events</a>
                            </li>
                        </Link>
                        <Link to='/bootcamps'>
                            <li>
                                <AirplaySharpIcon/>
                                <a href="bootcamps">Bootcamps</a>
                            </li>
                        </Link>
                        <Link to='/workshops'>
                            <li>
                                <VideocamSharpIcon/>
                                <a>Workshop</a>
                            </li>
                        </Link>
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
                        {this.state.events.map((event)=>{
                            const{name,short_desc,registration_start_time,fees,venue,mobile_cover_picture} = event;
                            return(
                                <div className="col-12 col-lg-6 mb-4">
                                    <div className="card">
                                        <img src={event.mobile_cover_picture} alt="cover-pic"/>
                                        <div className="card-body">
                                            <h4 className="card-title">{event.name} </h4>
                                            <div className="card-text info">
                                                <div className="card-info-text">
                                                    <span>Starts on</span>
                                                    {event.registration_start_time}
                                                </div>
                                                <div className="card-info-text">
                                                    <span>Entry Fee</span>
                                                    {event.fees}
                                                </div>
                                                <div className="card-info-text">
                                                    <span>Venue</span>
                                                    {event.venue}
                                                </div>
                                            </div>
                                            <hr></hr>
                                            <p>{event.short_desc}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>  
            </div>
         );
    }
}
 
export default CodingEvents;