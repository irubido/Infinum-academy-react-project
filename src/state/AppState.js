import {observable, decorate, computed, autorun} from 'mobx';

class AppState{
  flights = [];
  flightFilter = localStorage.getItem('flightFilter') || '';
  bookingResponse = [];
  userData = [];
  name = localStorage.getItem('name');

  get filteredFlights() {
    if(this.flights){
      return this.flights.filter((flight) =>
      flight.name.toLowerCase().includes(this.flightFilter.toLowerCase()),
    );
    }
  }
}

decorate(AppState, {
  flights: observable,
  flightFilter: observable,
  filteredFlights: computed,
  bookingResponse: observable,
  userData: observable,
  name: observable,
})

export const appState = new AppState();

autorun(() => {
  localStorage.setItem('flightFilter', appState.flightFilter);
});