import React from 'react';
import ReactDOM from 'react-dom';
import Home from './containers/Home';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Login from './containers/Login';
import Register from './containers/Register';
import './style.css';

function App() {
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </Switch>
    </BrowserRouter>
  )
}

ReactDOM.render((<App  />), document.getElementById('root'));

