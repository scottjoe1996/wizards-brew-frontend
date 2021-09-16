import { Container, createMuiTheme, createStyles, makeStyles, MuiThemeProvider } from '@material-ui/core';
import { blueGrey } from '@material-ui/core/colors';
import React from 'react';

import Header from './components/header/header';
import OktaRouter from './router/okta-router';

const customTheme = createMuiTheme({
  palette: {
    primary: {
      main: blueGrey[500]
    },
    secondary: {
      main: blueGrey[50]
    }
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1440
    }
  }
});

const useStyles = makeStyles(() =>
  createStyles({
    container: {
      paddingTop: '96px'
    }
  })
);

const App: React.FunctionComponent = () => {
  const classes = useStyles();
  return (
    <MuiThemeProvider theme={customTheme}>
      <Header />
      <Container maxWidth='xl' className={classes.container}>
        <OktaRouter />
      </Container>
    </MuiThemeProvider>
  );
};

export default App;
