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

  const handleShowMoreSpellsClick = (): void => {
    const shownSoFar = shownCounter * SHOW_SPELL_LIMIT;
    addNextSpellsToShow(shownSoFar, shownSoFar + SHOW_SPELL_LIMIT);
    setShownCounter(shownCounter + 1);
  };

  const addNextSpellsToShow = (start: number, end: number): void => {
    const spellsToAdd = SPELL_LIST.slice(start, end);
    previousShownSpells = [...previousShownSpells, ...spellsToAdd];
    setSpellsToShow(previousShownSpells);
  };

  const isShowMoreButtonDisabled = (): boolean => shownCounter * SHOW_SPELL_LIMIT >= SPELL_LIST.length;

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
      <Grid container justify='flex-start' spacing={3}>
        {spellCards}
      </Grid>
      <GutterButton isDisabled={isShowMoreButtonDisabled()} onClick={handleShowMoreSpellsClick}>
        Show More
      </GutterButton>
    </div>
  );
};

export default Spellbook;
