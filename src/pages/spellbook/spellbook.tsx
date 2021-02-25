import React, { useEffect, useState } from 'react';

import { Spell } from '../../types/spell';
import spellList from '../../data/spell-list.json';
import GutterButton from '../../components/buttons/gutter-button/gutter-button';
import SpellList from '../../components/spell-list/spell-list';

const SPELL_LIST = spellList as Spell[];
const SHOW_SPELL_LIMIT = 15;

let previousShownSpells: Spell[] = [];

const Spellbook: React.FunctionComponent = () => {
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

  return (
    <div>
      <h1>Spellbook</h1>
      <SpellList spells={spellsToShow} />
      <GutterButton isDisabled={isShowMoreButtonDisabled()} onClick={handleShowMoreSpellsClick}>
        Show More
      </GutterButton>
    </div>
  );
};

export default Spellbook;
