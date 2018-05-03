import React from "react"
import ReactDOM from "react-dom"
import App from "./routes/App"

// This seems to work with hot module reload as well...
ReactDOM.render( 
  <App />,
  document.getElementById("root") 
)