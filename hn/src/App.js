import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Provider } from 'react-redux';
import store from './store.js';

import database from './fire';
import TopStories from './topstories'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <div className="App">
            <div className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h2>Welcome to React</h2>
            </div>
            <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>
          </div>
          <TopStories/>
        </div>
      </Provider>
    );
  }
}

export default App;
