import "babel-polyfill"
import React from "react"
import { render } from "react-dom"
import { Provider } from "mobx-react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { Home, Login, NoMatch } from "./routes"
import "./styles/index.scss"
import { default as Stores } from "./stores"

// Render app on the page
render(
  <Provider {...Stores}>
    <Router>
      <div id="wrapper">
        <Switch>
          <Route exact={true} path="/login" component={Login} />
          <Route exact={true} path="/" component={Home} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  </Provider>,
  document.getElementById("root")
)
