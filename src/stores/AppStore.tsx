/**
 * Sample MobX Class
 */
import { action, observable, decorate } from 'mobx';

class App_Store {

  /////////////// Observable ///////////////
  
  AppData = []

  ///////////////// Drivers /////////////////

  Create() {}
  Read() {}
  Update() {}

}

decorate(App_Store, {
  AppData: observable,
  Create: action,
  Read: action,
  Update: action,
})

export default App_Store;
