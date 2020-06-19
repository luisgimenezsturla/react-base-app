import React from 'react';
import ReactDOM from 'react-dom';

const rootEl = document.getElementById('app-site');

let render = () => {
  const Root = require('./root').default;
  ReactDOM.render(
    <Root />,
    rootEl
  );
};

if (module.hot) {
  module.hot.accept('./root', () => {
    const Root = require('./root').default;
    render(
      <Root />,
      rootEl
    );
  });
}

render();
