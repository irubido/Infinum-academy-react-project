import {observable, decorate, computed, autorun} from 'mobx';

class AppState{
  flights = [];
}

decorate(AppState, {
  flights: observable,
})

export const appState = new AppState();