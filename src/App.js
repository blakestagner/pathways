import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";
import './App.css';
import Landing from './landing/Landing';
import Programs from './programs/Programs';
import Programdetails from './programDetails/Programdetails'


export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <React.Fragment>
              <Route exact path="/" component={ Landing } />
              <Route exact path='/programs/:programsId' component={ Programs } />
              <Route exact path='/programs/:programsId/:programDetail' component={ Programdetails } />
            </React.Fragment>
          </Switch>
        </Router>

      </div>
    );
  }
}
