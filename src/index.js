import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { isDeclareModule } from '@babel/types';

function formatTime(time) {
    
    return (<ul>
      <li>{time.substring(11,19)}</li>
      <li>{time.substring(0,10)}</li>
    </ul>)
}
class App extends Component {
  state = {
      items: [],
      isLoaded: false,
    }
  componentDidMount(){
    fetch('https://flighter-hw7.herokuapp.com/api/flights', {
      headers: {
        'Authorization': '3zE9DYLabN93eCUaH5gHeHhm',
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        }
    })
      .then(res => res.json())
      .then(json => {
          
          this.setState({
           isLoaded: true,
           items: json.flights,
         })
      });
  }
  render() {
    if (!this.state.isLoaded) {
      return <div>Loading...</div>
    }else{
    return (
      <div>
        {console.log(this.state.items)}
          {this.state.items.filter(x => x.no_of_seats>x.no_of_booked_seats).map(x => (
            <ul key={x.id}>
              <h1>{x.name}</h1>
              <li>Price: {x.base_price}</li>
              <li>Company id: {x.company_id}</li>
              <li>Company name: {x.company_name}</li>
              <li>Current price: {x.current_price}</li>
              <li>Flys at: {formatTime(x.flys_at)}</li>
              <li>Lands at: {formatTime(x.lands_at)}</li>
              <li>Seats: {x.no_of_seats}</li>
              <li>Booked seats: {x.no_of_booked_seats}</li>
              <li>Free seats: {x.no_of_seats - x.no_of_booked_seats}</li>
            </ul>
          ))}
      </div>
    );
  }
  }
}
ReactDOM.render(<App  />, document.getElementById('root'));

