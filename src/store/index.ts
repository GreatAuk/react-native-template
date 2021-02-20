import TimerStore from './timer';
import {createContext} from 'react';

class RootStore {
  timerStore: TimerStore;
  constructor() {
    this.timerStore = new TimerStore();
  }
}

const store = new RootStore();

export const StoreContext = createContext<RootStore>(store);

export default store;
