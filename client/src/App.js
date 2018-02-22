// libraries
import React, { Component } from 'react';
// components
// import { CSSTransitionGroup } from 'react-transition-group';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import FilteredProjectsList from './containers/filteredProjectsList';
import Project from './containers/project';
import ProjectCreation from './containers/projectCreation';
import AppBar from './components/appbar';
import SideBar from './components/sidebar';
import Dashboard from './components/dashboard';

// assets
// import loading from './assets/img/loading.png';
import './assets/css/App.css';
import 'fullcalendar-reactwrapper/dist/css/fullcalendar.min.css';


/*const fetchJson = (url) => {
    return fetch(url).then(function(response) {
      var contentType = response.headers.get("content-type");
      if(contentType && contentType.includes("application/json")) {
        return response.json();
      }
      throw new TypeError("Oops, we haven't got JSON!");
    })
};
*/
// wrap <Route> and use this everywhere instead, then when
// sub routes are added to any route it'll work
const RouteWithSubRoutes = (route) => (
  <Route path={route.path} render={props => (
    // pass the sub-routes down to keep nesting
    <route.component {...props}
      header={route.header}
      parentState={route.parentState} 
      routes={route.routes}/>
  )}/>
);


class App extends Component {
  constructor(props){
    super(props);
    /*this.state = {
      fetched: false,
      user: null,
    };*/
  }

  componentDidMount(){
    // this.fetchProjects();
    // set authenticated user
    // window._SELA_USER ? this.setState({user: window._SELA_USER}) : this.fetchUser();
  }

  render() {
    let _self = this;
    console.log('Router basename:', process.env.CLIENT_BASE);
    return <Router basename={process.env.CLIENT_BASE || "/client"}>
      <div id="wrapper">
        <AppBar />
        <SideBar />
        <Switch>
          {React.Children.toArray(routes.map((route) => (
            <RouteWithSubRoutes {...route} />
          )))}
          <Redirect to="/projects/all" />
        </Switch>
      </div>
    </Router>
  }
}

const routes = [
  { path: '/projects/all',
    component: FilteredProjectsList,
    header: {
      icon: 'pie_chart',
      title: 'Projects',
      description: 'A list of all public projects on SELA',
    }
  },
  { path: '/projects/summary/:id',
    component: Project
  },
  {
    path: '/projects/new',
    component: ProjectCreation,
  },
  { path: '/dashboard',
    component: Dashboard,
    header: {
      icon: 'dashboard',
      title: 'Dashboard',
      description: 'Summary of your account activity'
    },
  }
];


export default App;
