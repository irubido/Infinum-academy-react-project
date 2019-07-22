import {observable, decorate, /*computed, autorun*/} from 'mobx';

class AppState{
  flights = [];
  flight = [];
  token = '';
  booking = [];
  bookingResponse = [];
}

decorate(AppState, {
  flights: observable,
  flight: observable,
  token: observable,
  booking: observable,
  bookingResponse: observable,
})

export const appState = new AppState();