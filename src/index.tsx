import "babel-polyfill";
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { Home, NoMatch } from './routes';
import "./styles/index.scss"
import TK421 from './lib/TK421';
import * as stores from './stores';

/**
 * Init Block A
 * The instantiation of the outermost higher order component
 * that create vendor specific providers as well as the router.
 */
const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      TK421.isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: props.location }
          }}
        />
      )
    }
  />
);

const App = () => (
	<Provider {...stores}>
		<Router>
			<div id="wrapper">
        <Switch>
          <PrivateRoute exact path="/" component={Home} />
          <Route component={NoMatch} />	    		
        </Switch>
			</div>
    </Router>	  
  </Provider>  
)

ReactDOM.render(
	<App />,
	document.getElementById('root')
);