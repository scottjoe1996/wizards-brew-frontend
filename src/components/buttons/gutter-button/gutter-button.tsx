import { Button, createStyles, Grid, makeStyles, Theme } from '@material-ui/core';

import React from 'react';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    buttonContainer: {
      paddingTop: '25px',
      paddingBottom: '25px',
      [theme.breakpoints.up('sm')]: {
        maxWidth: '400px'
      }
    }
  })
);

interface GutterButtonProps {
  isDisabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const DEFAULT_PROPS: GutterButtonProps = {
  isDisabled: false,
  onClick: () => null
};

const GutterButton: React.FunctionComponent<GutterButtonProps> = ({ isDisabled = DEFAULT_PROPS.isDisabled, onClick = DEFAULT_PROPS.onClick, children }) => {
  const classes = useStyles();

  return (
    <Grid container justify='center'>
      <Grid item xs={10} className={classes.buttonContainer}>
        <Button fullWidth size='large' variant='contained' color='primary' disabled={isDisabled} onClick={onClick}>
          {children}
        </Button>
      </Grid>
    </Grid>
  );
};

export default GutterButton;
