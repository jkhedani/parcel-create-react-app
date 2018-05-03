// Setup based on HMR
// https://github.com/gaearon/react-hot-loader
import React from "react"
import { render } from "react-dom"
import App from "./routes/App"

function renderApp() {
  const App = require('./routes/App').default
  render(<App />, root)
}

renderApp()

module.hot.accept(renderApp)

// This seems to work with hot module reload as well...
// import ReactDOM from "react-dom"
// ReactDOM.render( 
//   <App />,
//   document.getElementById("root") 
// )