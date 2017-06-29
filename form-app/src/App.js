import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MyForm from './myform';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {red700} from 'material-ui/styles/colors';

import {BrowserRouter, Route, Link, Switch, Redirect} from 'react-router-dom';

const Home = () => (<h2>Home Page</h2>);

const NoMatch= ({ location }) => (
  <div>
    <h3>Page Not Found: { location.pathname }</h3>
  </div>
)

const theme = getMuiTheme({
  palette: {primary1Color: red700}
});

const Article = (props) => {
  console.log(props);
  return (
    <div>
      <h3>Article ID: { props.match.params.id }</h3>
    </div>
  )
}

class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={theme}>
        <div>
          <AppBar title="My Awesome Form"/>
          <BrowserRouter>
            <div>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/form">Form</Link>
                </li>
              </ul>
              
              <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/form" component={MyForm}/>
                <Redirect from="/old-form" to="/form"/>
                <Route path="/article/:id" component={Article}/>
                <Route component={NoMatch}/>
              </Switch>
            </div>
          </BrowserRouter>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
