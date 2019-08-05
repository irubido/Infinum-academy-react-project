import { getData } from '.';

const loadFlights = (appState) => getData('flights')
  .then((response) => response.flights)
  .then((flights) => (appState.flights = flights));

export default loadFlights;
