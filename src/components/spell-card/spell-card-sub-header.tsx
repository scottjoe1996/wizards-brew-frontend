import { createStyles, Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { CastingTime, Duration, Range } from '../../types/spell';

const useStyles = makeStyles(() =>
  createStyles({
    subHeaderContainer: {
      paddingLeft: '8px',
      paddingRight: '8px'
    },
    spellAttributeContainer: {
      minWidth: 'min-content'
    },
    spellAttributeTitle: {
      fontWeight: 'bold'
    }
  })
);

interface SpellCardSubHeaderProps {
  castingTime: CastingTime;
  range: Range;
  duration: Duration;
}

const SpellCardSubHeader: React.FunctionComponent<SpellCardSubHeaderProps> = ({ castingTime, range, duration }) => {
  const classes = useStyles();

  return (
    <Grid className={classes.subHeaderContainer} wrap='nowrap' container spacing={2}>
      <Grid className={classes.spellAttributeContainer} item xs={4}>
        <Typography className={classes.spellAttributeTitle} noWrap variant='overline'>
          CASTING TIME
        </Typography>
        <Typography variant='body2' gutterBottom>
          {castingTime}
        </Typography>
      </Grid>
      <Grid className={classes.spellAttributeContainer} item xs={4}>
        <Typography className={classes.spellAttributeTitle} variant='overline'>
          RANGE
        </Typography>
        <Typography variant='body2' gutterBottom>
          {range}
        </Typography>
      </Grid>
      <Grid className={classes.spellAttributeContainer} item xs={4}>
        <Typography className={classes.spellAttributeTitle} variant='overline'>
          DURATION
        </Typography>
        <Typography variant='body2' gutterBottom>
          {duration}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default SpellCardSubHeader;
