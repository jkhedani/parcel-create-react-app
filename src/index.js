import React from "react"
import ReactDOM from "react-dom"
import "./styles"

console.log(process.env.API_ENDPOINT)

// Render app
const App = () => (
  <div>
		<h1>Hello, Parcel.</h1>
  </div>
)
ReactDOM.render( 
  <App />,
  document.getElementById("root") 
)