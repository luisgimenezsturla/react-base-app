import React from 'react';
import ReactDOM from 'react-dom';

const rootEl = document.getElementById('app-site');

let render = () => {
  const MainApp = require('./mainapp').default;
  ReactDOM.render(
    <MainApp />,
    rootEl
  );
};

if (module.hot) {
  module.hot.accept('./mainapp', () => {
    const MainApp = require('./mainapp').default;
    render(
      <MainApp />,
      rootEl
    );
  });
}

render();
