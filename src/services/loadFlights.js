import { getData } from '../services/getData';

export function loadFlights(appState) {
  return getData('flights')
    .then((response) => response.flights)
    .then((flights) => (appState.flights = flights));
}