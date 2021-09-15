import React from 'react';
import { Redirect } from 'react-router-dom';

import { useOktaAuth } from '@okta/okta-react';
import { Tokens } from '@okta/okta-auth-js';

import OktaSignInWidget from '../../components/sign-in-widget/okta-sign-in-widget';
import config from '../../config/config';

const Login: React.FunctionComponent = () => {
  const { oktaAuth, authState } = useOktaAuth();

  if (!authState) return null;

  const onSuccess = (tokens: Tokens | undefined) => {
    oktaAuth.handleLoginRedirect(tokens);
  };

  const onError = (err: Error) => {
    console.log('error logging in', err);
  };

  return authState.isAuthenticated ? (
    <Redirect to={{ pathname: '/' }} />
  ) : (
    <OktaSignInWidget signInConfig={config.okta.oktaSignInConfig} onSuccess={onSuccess} onError={onError} />
  );
};

export default Login;
