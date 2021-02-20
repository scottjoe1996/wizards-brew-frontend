import { Container, createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import React from 'react';

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

const App: React.FunctionComponent = () => {
  return (
    <MuiThemeProvider theme={customTheme}>
      <Header />
      <Container maxWidth='xl'>
        <Spellbook />
      </Container>
    </MuiThemeProvider>
  );
};

export default App;
