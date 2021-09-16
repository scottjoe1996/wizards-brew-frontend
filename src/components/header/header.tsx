import { AppBar, createStyles, makeStyles, Theme, Toolbar, Typography } from '@material-ui/core';
import { LocalLibraryRounded } from '@material-ui/icons';
import React from 'react';
import LogoutButton from '../buttons/logout-button/logout-button';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    titleSpacing: {
      flexGrow: 1
    },
    menuButton: {
      marginRight: theme.spacing(2),
      marginBottom: theme.spacing(0.25)
    }
  })
);

interface HeaderProps {
  isLoggedIn?: boolean;
}

const Header: React.FunctionComponent<HeaderProps> = ({ isLoggedIn }) => {
  const classes = useStyles();

  return (
    <AppBar>
      <Toolbar>
        <LocalLibraryRounded className={classes.menuButton} />
        <Typography variant='h6' className={classes.titleSpacing}>
          Wizards Brew
        </Typography>
        <LogoutButton isInvisible={isLoggedIn} />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
