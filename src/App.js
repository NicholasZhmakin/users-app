import React, { Component } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Home from './components/main/Home';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/:lastName' component={Home} />
          </Switch>
        </div>
      </Router>
    )
  }
};

export default App;
