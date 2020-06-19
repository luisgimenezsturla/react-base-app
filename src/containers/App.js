import React, { useEffect } from "react";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { Redirect, Route, Switch } from "react-router-dom";
import { connect } from 'react-redux';
import { useDispatch, useSelector } from "react-redux";
import { IntlProvider } from "react-intl";
import { withCookies, Cookies } from 'react-cookie';
import blueTheme from "./themes/blueTheme";
import AppLocale from "../lngProvider";
import MainApp from 'app/index.js';
import AES from 'crypto-js/aes';
import Utf8 from 'crypto-js/enc-utf8';

const encrypt = (text) => {
  return AES.encrypt('d4rr13ns1!@.', passphrase).toString();
};

const decrypt = (ciphertext) => {
  const bytes = AES.decrypt(ciphertext, 'd4rr13ns1!@.');
  const originalText = bytes.toString(Utf8);
  return originalText;
};

const App = (props) => {
  const dispatch = useDispatch();
  const { locale } = useSelector(({ settings }) => settings);
  const { match, location, cookies } = props;

  useEffect(() => {
    window.__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__ = true;
  }, [dispatch, props.history.location.pathname, props.location.search]);

  let applyTheme = createMuiTheme(blueTheme);

  const currentAppLocale = AppLocale[locale.locale];

  // const authCookie = cookies.get();

  return (
    <ThemeProvider theme={applyTheme}>
      <IntlProvider
        locale={currentAppLocale.locale}
        messages={currentAppLocale.messages}>
        <div className="app-main">
          <Switch>
            <Route path={`${match.url}app`} component={MainApp} />
          </Switch>
        </div>
      </IntlProvider>
    </ThemeProvider>
  );
};

const mapStateToProps = ({ settings }) => {
  const { locale } = settings;
  return { locale }
};

export default withCookies(connect(mapStateToProps)(App));
