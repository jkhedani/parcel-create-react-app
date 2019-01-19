import Stores from "./root"

// Initialize classes here to prevent hot module
// reloading from re-initializing stores
// Shared context super store:
// https://mobx.js.org/best/store.html#combining-multiple-stores
export default {
  Stores: new Stores(),
}
