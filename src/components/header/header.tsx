import { AppBar, Toolbar, Typography } from '@material-ui/core';
import React from 'react';

const Header: React.FunctionComponent = () => {
  return (
    <AppBar position='sticky'>
      <Toolbar>
        <Typography variant='h6'>Wizards Brew</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
