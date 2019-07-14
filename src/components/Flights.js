import React, { Component } from 'react';

class Flights extends Component {
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
    return <div className="results">Loading...</div>
  }else{
  return (
    <div className="flights-container">
    <div className="results">RESULTS</div>
    <div className="flights">
        {this.state.items.filter(x => x.no_of_seats>x.no_of_booked_seats).map(x => (
          <div className="flight-item">
            <div className="threedots">
              <div><strong>...</strong></div>
            </div>
            <div className="image">
              <img src="https://source.unsplash.com/1600x900/?airplane,flight" height="200px" width="100%"></img>
            </div>
            <div className="flight-summary">
              <h4>Departs at {(x.flys_at).substring(11,16)}</h4>
              <p>{x.company_name}</p>
              <p>*** | {x.no_of_seats - x.no_of_booked_seats} tickets available</p>
              <p>Price <span className="price">{x.current_price}$</span></p>
            </div>
          

          {/* {x.name}{x.id}
            Price: {x.base_price}
            Company id: {x.company_id}
            Company name: {x.company_name}
            Current price: {x.current_price}
            Flys at: {(x.flys_at)}
            Lands at: {(x.lands_at).substring(11,16)}
            Seats: {x.no_of_seats}
            Booked seats: {x.no_of_booked_seats}
            Free seats: {x.no_of_seats - x.no_of_booked_seats} */}
          </div>
          
        ))}
    </div>
    </div>
  );
}
}
}
export default Flights;