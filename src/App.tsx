import { Container, createMuiTheme, createStyles, makeStyles, MuiThemeProvider } from '@material-ui/core';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './components/header/header';
import Spellbook from './pages/spellbook/spellbook';

const customTheme = createMuiTheme({
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
    <BrowserRouter>
      <MuiThemeProvider theme={customTheme}>
        <Header />
        <Container maxWidth='xl' className={classes.container}>
          <Switch>
            <Route path='/'>
              <Spellbook />
            </Route>
          </Switch>
        </Container>
      </MuiThemeProvider>
    </BrowserRouter>
  );
};

export default App;
