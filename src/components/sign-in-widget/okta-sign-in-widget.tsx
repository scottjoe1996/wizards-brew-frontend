import React, { useEffect, useRef } from 'react';

import '@okta/okta-signin-widget/dist/css/okta-sign-in.min.css';
import OktaSignIn from '@okta/okta-signin-widget';

import { OktaSignInConfig } from '../../config/config';

interface OktaSignInWidgetProps {
  signInConfig: OktaSignInConfig;
  onSuccess: (tokens: any) => void;
  onError: (err: Error) => void;
}

const OktaSignInWidget: React.FunctionComponent<OktaSignInWidgetProps> = ({ signInConfig, onSuccess, onError }) => {
  const widgetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!widgetRef.current) {
      return;
    }

    const widget = new OktaSignIn(signInConfig);

    widget
      .showSignInToGetTokens({
        el: widgetRef.current
      })
      .then(onSuccess)
      .catch(onError);

    return () => widget.remove();
  }, [signInConfig, onSuccess, onError]);

  return <div ref={widgetRef} />;
};

export default OktaSignInWidget;
