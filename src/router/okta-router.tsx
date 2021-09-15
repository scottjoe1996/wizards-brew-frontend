import React from 'react';
import { BrowserRouter, Route, Switch, useHistory } from 'react-router-dom';

import { Security } from '@okta/okta-react';
import { OktaAuth, toRelativeUrl } from '@okta/okta-auth-js';

import Spellbook from '../pages/spellbook/spellbook';
import Login from '../pages/login/login';
import config from '../config/config';

const HOME_URI = '/';

const oktaAuth = new OktaAuth(config.okta.oktaAuthConfig);

const OktaRouter: React.FunctionComponent = () => {
  const history = useHistory();

  const restoreOriginalUri = async (_oktaAuth: OktaAuth, originalUri: string) => {
    history.replace(toRelativeUrl(originalUri || HOME_URI, window.location.origin));
  };

  return (
    <BrowserRouter>
      <Security oktaAuth={oktaAuth} restoreOriginalUri={restoreOriginalUri}>
        <Switch>
          <Route path={HOME_URI} exact component={Spellbook} />
          <Route path='/login' exact render={() => <Login />} />
        </Switch>
      </Security>
    </BrowserRouter>
  );
};

export default OktaRouter;
