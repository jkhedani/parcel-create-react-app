import React from "react"
import ReactDOM from "react-dom"
import { Home } from "./routes"
import "./styles"

// Render app
const App = () => (
  <div id="app">
		<Home />
  </div>
)

ReactDOM.render( 
  <App />,
  document.getElementById("root") 
)