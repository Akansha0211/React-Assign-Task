import React, { Component } from 'react';
import DateRangeSharpIcon from '@material-ui/icons/DateRangeSharp';
import AirplaySharpIcon from '@material-ui/icons/AirplaySharp';
import CodeSharpIcon from '@material-ui/icons/CodeSharp';
import LiveTvSharpIcon from '@material-ui/icons/LiveTvSharp';
import VideocamSharpIcon from '@material-ui/icons/VideocamSharp';
import './Events.css';
import axios from 'axios';

class Events extends Component {
    state = { 
        events:[]
     };

     //manage GET requests from API
     async componentDidMount(){
         const url = "https://api.codingninjas.com/api/v3/events?event_category=ALL_EVENTS&event_sub_category=Upcoming&tag_list=&offset=0";
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
                {/* {this.state.events.map((event, index)=>{
                    const{name,short_desc,registration_start_time,fees,venue,mobile_cover_picture} = event;
                    return(
                        <div className="container-fluid mt-4">
                            <div className="row">
                                <div className="col-12 col-lg-6 mb-2">
                                    <div className="card" key={index}>
                                        <img src={event.mobile_cover_picture} alt="cover-pic"/>
                                        <div className="card-body">
                                            <h4 className="card-title">{event.name} </h4>
                                            <div className="card-text info">
                                                <div>
                                                    {event.registration_start_time}
                                                </div>
                                                <div>
                                                    {event.fees}
                                                </div>
                                                <div>
                                                    {event.venue}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })} */}

                <div className="container-fluid mt-4">
                    <div className="row">
                        {this.state.events.map((event)=>{
                            return(
                                <div className="col-12 col-lg-6 mb-2">
                                    <div className="card">
                                        <img src={event.mobile_cover_picture} alt="cover-pic"/>
                                        <div className="card-body">
                                            <h4 className="card-title">{event.name} </h4>
                                            <div className="card-text info">
                                                <div>
                                                    {event.registration_start_time}
                                                </div>
                                                <div>
                                                    {event.fees}
                                                </div>
                                                <div>
                                                    {event.venue}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>

                {/* <div className="container-fluid mt-5">
                    <div className="row">
                        <div className="col-12 col-lg-6 mb-2">
                            <div className="card">
                                <img alt="cover-pic"></img>
                                <div className="card-body">
                                    <h4 className="card-title">name</h4>
                                    <ul className="info">
                                        <li>starts on</li>
                                        <li> entry fee</li>
                                        <li>venue</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6 mb-2">
                            <div className="card">
                                <img alt="cover-pic"></img>
                                <div className="card-body">
                                    <h4 className="card-title">name</h4>
                                    <ul className="info">
                                        <li>starts on</li>
                                        <li> entry fee</li>
                                        <li>venue</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6 mb-2">
                            <div className="card">
                                <img alt="cover-pic"></img>
                                <div className="card-body">
                                    <h4 className="card-title">name</h4>
                                    <ul className="info">
                                        <li>starts on</li>
                                        <li> entry fee</li>
                                        <li>venue</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6 mb-2">
                            <div className="card">
                                <img alt="cover-pic"></img>
                                <div className="card-body">
                                    <h4 className="card-title">name</h4>
                                    <ul className="info">
                                        <li>starts on</li>
                                        <li> entry fee</li>
                                        <li>venue</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>               */}
            </div>
         );
    }
}
 
export default Events;