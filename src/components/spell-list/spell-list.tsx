import { createStyles, Grid, makeStyles } from '@material-ui/core';
import React from 'react';

import SpellCard from '../spell-card/spell-card';
import { Spell } from '../../types/spell';

const useStyles = makeStyles(() =>
  createStyles({
    spellCardContainer: {
      minWidth: 'min-content'
    }
  })
);

interface SpellListProps {
  spells: Spell[];
}

const SpellList: React.FunctionComponent<SpellListProps> = ({ spells }) => {
  const classes = useStyles();

  const spellCards = spells.map((spell) => {
    return (
      <Grid key={spell.name} item xs={12} md={6} lg={4} className={classes.spellCardContainer}>
        <SpellCard spell={spell} />
      </Grid>
    );
  });

  return (
    <Grid container justifyContent='flex-start' spacing={3}>
      {spellCards}
    </Grid>
  );
};

export default SpellList;
