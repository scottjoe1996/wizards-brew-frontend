import React, { useEffect, useState } from 'react';

import { createStyles, Grid, makeStyles } from '@material-ui/core';

import SpellCard from '../../components/spell-card/spell-card';
import { Spell } from '../../types/spell';
import spellList from '../../data/spell-list.json';
import GutterButton from '../../components/buttons/gutter-button/gutter-button';

const SPELL_LIST = spellList as Spell[];
const SHOW_SPELL_LIMIT = 15;

let previousShownSpells: Spell[] = [];

const useStyles = makeStyles(() =>
  createStyles({
    spellCardContainer: {
      minWidth: 'min-content'
    },
    showMoreButton: {}
  })
);

const Spellbook: React.FunctionComponent = () => {
  const classes = useStyles();
  const [spellsToShow, setSpellsToShow] = useState([] as Spell[]);
  const [shownCounter, setShownCounter] = useState(1);

  const addNextSpellsToShow = (start: number, end: number) => {
    const spellsToAdd = SPELL_LIST.slice(start, end);
    previousShownSpells = [...previousShownSpells, ...spellsToAdd];
    setSpellsToShow(previousShownSpells);
  };

  const handleShowMoreSpellsClick = () => {
    addNextSpellsToShow(shownCounter, shownCounter + SHOW_SPELL_LIMIT);
    setShownCounter(shownCounter + SHOW_SPELL_LIMIT);
  };

  useEffect(() => {
    addNextSpellsToShow(0, SHOW_SPELL_LIMIT);
  }, []);

  const spellCards = spellsToShow.map((spell) => {
    return (
      <Grid key={spell.name} item xs={12} md={6} lg={4} className={classes.spellCardContainer}>
        <SpellCard spell={spell} />
      </Grid>
    );
  });

  return (
    <div>
      <h1>Spellbook</h1>
      <Grid container justify='center' spacing={3}>
        {spellCards}
      </Grid>
      <GutterButton onClick={handleShowMoreSpellsClick}>Show More</GutterButton>
    </div>
  );
};

export default Spellbook;
