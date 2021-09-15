export interface OktaConfigBase {
  clientId: string;
  redirectUri: string;
}

export interface OktaAuthConfig extends OktaConfigBase {
  issuer: string;
}

export interface OktaSignInConfig extends OktaConfigBase {
  baseUrl: string;
}

export interface OktaConfig {
  oktaAuthConfig: OktaAuthConfig;
  oktaSignInConfig: OktaSignInConfig;
}

export interface Config {
  okta: OktaConfig;
}

const OKTA_AUTH: OktaAuthConfig = {
  issuer: `https://${process.env.REACT_APP_OKTA_DOMAIN}/oauth2/default`,
  clientId: process.env.REACT_APP_OKTA_CLIENT_ID!,
  redirectUri: window.location.origin + '/login/callback'
};

const OKTA_SIGN_IN: OktaSignInConfig = {
  baseUrl: `https://${process.env.REACT_APP_OKTA_DOMAIN}`,
  clientId: process.env.REACT_APP_OKTA_CLIENT_ID!,
  redirectUri: window.location.origin + '/login/callback'
};

const config: Config = {
  okta: { oktaAuthConfig: OKTA_AUTH, oktaSignInConfig: OKTA_SIGN_IN }
};

export default config;
