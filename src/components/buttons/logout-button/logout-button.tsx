import React from 'react';
import classNames from 'classnames';

import { Button, createStyles, makeStyles, Theme } from '@material-ui/core';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    invisibleStyle: {
      display: 'none'
    }
  })
);

interface LogoutButtonProps {
  isInvisible?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const DEFAULT_PROPS: LogoutButtonProps = {
  isInvisible: false,
  onClick: () => null
};

const LogoutButton: React.FunctionComponent<LogoutButtonProps> = ({ isInvisible = DEFAULT_PROPS.isInvisible!, onClick = DEFAULT_PROPS.onClick }) => {
  const classes = useStyles();

  return (
    <Button
      variant='outlined'
      color='secondary'
      startIcon={<ExitToAppIcon />}
      onClick={onClick}
      className={classNames({
        [classes.invisibleStyle]: isInvisible
      })}
    >
      LOGOUT
    </Button>
  );
};

export default LogoutButton;
