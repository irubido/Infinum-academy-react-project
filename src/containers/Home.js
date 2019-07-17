import React from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Flights from '../components/Flights';


const Home = () =>(
  <div className="wrapper">
          <Header />
          <Search />
          <Flights />
  </div>
);


export default Home;