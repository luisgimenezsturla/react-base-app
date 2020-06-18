import React, { useEffect } from "react";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { Redirect, Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { IntlProvider } from "react-intl";
import blueTheme from "./themes/blueTheme";
import AppLocale from "../lngProvider";
import MainApp from 'app/index.js';

const App = (props) => {
  const dispatch = useDispatch();
  const { locale } = useSelector(({ settings }) => settings);
  const { match, location } = props;

  useEffect(() => {
    window.__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__ = true;
  }, [dispatch, props.history.location.pathname, props.location.search]);


  let applyTheme = createMuiTheme(blueTheme);

  if (location.pathname === '/') {
    return (<Redirect to={'/app/sample-page'} />);
  }

  const currentAppLocale = AppLocale[locale.locale];
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

export default App;
