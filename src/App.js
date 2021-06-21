import './App.css';
import Banner from './Banner';
import NavigationBar from './NavigationBar';
import Events from './Events';
import Webinars from './Webinars';
import CodingEvents from './CodingEvents';
import Bootcamps from './Bootcamps';
import Workshops from './Workshops';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    // <div className="App">
    //   <NavigationBar/>
    //   <Banner/>
    //   <Events/>
    // </div>
    <Router>
      <Switch>
        <Route exact path = '/'>
          <NavigationBar/>
          <Banner/>
          <Events/>
        </Route>
        <Route exact path='/webinars'>
          <NavigationBar/>
          <Banner/>
          <Webinars/>
        </Route>
        <Route exact path="/coding-events">
          <NavigationBar/>
          <Banner/>
          <CodingEvents/>
        </Route>
        <Route exact path = '/bootcamps'>
          <NavigationBar/>
          <Banner/>
          <Bootcamps/>
        </Route>
        <Route exact path ='/workshops'>
          <NavigationBar/>
          <Banner/>
          <Workshops/>
        </Route>
      </Switch>
    </Router>
    
  );
}

export default App;
