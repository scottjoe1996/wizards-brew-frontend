import { AppBar, createStyles, makeStyles, Theme, Toolbar, Typography } from '@material-ui/core';
import { LocalLibraryRounded } from '@material-ui/icons';
import React from 'react';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    menuButton: {
      marginRight: theme.spacing(2),
      marginBottom: theme.spacing(0.25)
    }
  })
);

const Header: React.FunctionComponent = () => {
  const meme;
  const classes = useStyles();

  return (
    <AppBar position='sticky'>
      <Toolbar>
        <LocalLibraryRounded className={classes.menuButton} />
        <Typography variant='h6'>Wizards Brew</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
