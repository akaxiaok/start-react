import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './app';

const app = document.createElement('div');
app.id = 'app';
document.body.appendChild(app);

ReactDOM.render(
  <AppContainer >
    <App />
  </AppContainer >,
  app);
if (module.hot) {
  module.hot.accept('./app', function () {
    ReactDOM.render(
      <AppContainer >
        <App />
      </AppContainer >,
      app);
  });
}