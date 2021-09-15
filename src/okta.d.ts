declare module '@okta/okta-signin-widget' {
  export default class OktaSignIn {
    constructor(config: any);

    public showSignInToGetTokens(element: { el: HTMLDivElement }): Promise<void>;
    public remove(): void;
  }
}
