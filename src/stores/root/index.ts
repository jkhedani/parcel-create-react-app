import AppStore from "../app"

// mobx.js.org/best/store.html#combining-multiple-stores
export default class Stores {
  AppStore: AppStore
  constructor() {
    this.AppStore = new AppStore(this)
  }
}
