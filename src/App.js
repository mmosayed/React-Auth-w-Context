import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

// ---- Pages
import Header from './components/header';
import Home from './containers/home';
import Signup from './containers/signup';
import Login from './containers/login';
import Error404 from './components/error404';
import Logout from './containers/logout';



class App extends Component {

  render() {
    return (
      <HashRouter>
          <Route path='/' component={ Header } />
          <div className='container mt-5'>
            <Switch>
              <Route path='/' exact component={ Home } />
              <Route path='/signup' exact component={ Signup } />
              <Route path='/login' exact component={ Login } />
              <Route path='/logout' exact component={ Logout } />
              <Route component={ Error404 } />
            </Switch>
          </div>
      </HashRouter>
    );
  }
}

export default App;
