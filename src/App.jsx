import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import { Routes } from './router';
import Nav from './components/nav';



class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Fragment>
            <Nav></Nav>
            {Routes}
          </Fragment>
       </BrowserRouter>
      </Provider>
    )
  }
}

export default App;
