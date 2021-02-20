import {makeAutoObservable} from 'mobx';
export default class Timer {
  secondPassed = 1;
  constructor() {
    makeAutoObservable(this);
  }
  /** 加 1 秒 */
  increase() {
    this.secondPassed += 1;
  }
}
