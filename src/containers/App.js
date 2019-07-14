import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Header from '../components/Header';
import Search from '../components/Search';
import Flights from '../components/Flights';
import Login from '../containers/Login';
import Register from '../containers/Register';
import '../style.css';

const Home = () =>(
  <div className="wrapper">
          <Header />
          <Search />
          <Flights />
  </div>
);

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
export default App;