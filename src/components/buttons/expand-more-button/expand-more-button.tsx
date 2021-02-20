import { createStyles, IconButton, makeStyles, Theme } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import clsx from 'clsx';

import React from 'react';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    rotateAnimation: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest
      })
    },
    rotate: {
      transform: 'rotate(180deg)'
    }
  })
);

interface ExpandMoreButtonProps {
  isDown?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const DEFAULT_PROPS: ExpandMoreButtonProps = {
  isDown: false,
  onClick: () => null
};

const ExpandMoreButton: React.FunctionComponent<ExpandMoreButtonProps> = ({ isDown = DEFAULT_PROPS.isDown, onClick = DEFAULT_PROPS.onClick }) => {
  const classes = useStyles();

  return (
    <IconButton
      className={clsx(classes.rotateAnimation, {
        [classes.rotate]: isDown
      })}
      onClick={onClick}
    >
      <ExpandMoreIcon />
    </IconButton>
  );
};

export default ExpandMoreButton;
