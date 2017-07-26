import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import MyForm from './myform';
import EditForm from './edit_form';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {red700} from 'material-ui/styles/colors';

import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/menu';

import {BrowserRouter, Route, Link, Switch, Redirect} from 'react-router-dom';

import {auth} from './fsociety';

import { Provider } from 'react-redux';
import store from './store';

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

const AppMenu = (props) => (
  <IconMenu
    {...props}
    iconButtonElement={
      <IconButton><MoreVertIcon color="white" /></IconButton>
    }
    targetOrigin={{horizontal: 'right', vertical: 'top'}}
    anchorOrigin={{horizontal: 'right', vertical: 'top'}}
  >
    <MenuItem>
      <Link to="/" className="icon-menu">Home</Link>
    </MenuItem>
    <MenuItem>
      <Link to="/add" className="icon-menu">Add Form</Link>
    </MenuItem>
  </IconMenu>
);

class App extends Component {
  login () {
    console.log('logging in');
    
    auth()
      .then(function (user) {
        console.log(user);
      })
      .catch(function (e) {
        console.log(e);
      });
  }
  render() {
    return (
      <Provider store={store}>
        <MuiThemeProvider muiTheme={theme}>
          <div>
            <BrowserRouter>
              <div>
                <AppBar title="My Awesome Form" iconElementLeft={<AppMenu/>}/>
                <div>
                  <button onClick={(e) => this.login(e)}>Login</button>
                </div>
                <Switch>
                  <Route exact path="/dc-class-code-2017/" component={Home}/>
                  <Route path="/dc-class-code-2017/add" component={MyForm}/>
                  <Redirect from="/dc-class-code-2017/old-form" to="/form"/>
                  <Route path="/dc-class-code-2017/edit/:id" component={EditForm}/>
                  <Route component={NoMatch}/>
                </Switch>
              </div>
            </BrowserRouter>
          </div>
        </MuiThemeProvider>
      </Provider>
    );
  }
}

export default App;
