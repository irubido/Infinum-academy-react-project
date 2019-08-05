import React from 'react';
import ReactDOM from 'react-dom';

import {BrowserRouter, Route} from 'react-router-dom';

import './style.css';
import BookingModal from './containers/BookingModal';
import EditProfile from './containers/EditProfile';
import FlightDetail from './containers/FlightDetail';
import Home from './containers/Home';
import Login from './containers/Login';
import Profile from './containers/Profile';
import Register from './containers/Register';

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/flightdetail/:id" component={FlightDetail} />
      <Route path="/flightdetail/:id/bookingmodal" component={BookingModal} />
      <Route path="/profile/:id" component={Profile} />
      <Route path="/profile/:id/edit" component={EditProfile} />
    </BrowserRouter>
  );
}

ReactDOM.render((<App />), document.getElementById('root'));
