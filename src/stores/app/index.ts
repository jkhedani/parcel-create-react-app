/**
 * Sample MobX Class
 */
import { action, observable, decorate } from "mobx"
import Stores from "../root"

class AppStore {
  Stores: Stores
  AppData: string[] = []

  constructor(rootStore) {
    this.Stores = rootStore
  }

  Create() {
    // do something
  }
  Read() {
    // do something
  }
  Update() {
    // do something
  }
}

decorate(AppStore, {
  AppData: observable,
  Create: action,
  Read: action,
  Update: action,
})

export default AppStore
