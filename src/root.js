import React from 'react';
import { ConnectedRouter } from 'connected-react-router'
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import {CookiesProvider} from 'react-cookie';
import configureStore, { history } from './store';
import App from './containers/App';

export const store = configureStore();

const Root = () =>
  <CookiesProvider>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Switch>
          <Route path="/" component={App} />
        </Switch>
      </ConnectedRouter>
    </Provider>
  </CookiesProvider>

export default Root;