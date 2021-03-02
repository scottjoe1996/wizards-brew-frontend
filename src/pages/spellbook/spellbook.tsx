import React, { useState } from 'react';

import { Spell } from '../../types/spell';
import spellList from '../../data/spell-list.json';
import GutterButton from '../../components/buttons/gutter-button/gutter-button';
import SpellList from '../../components/spell-list/spell-list';
import SpellFilter from '../../components/spell-filter/spell-filter';

import useSpellsToShow from './spells-list-helper';

const DEFAULT_SPELL_LIST = spellList as Spell[];
const SHOW_SPELL_LIMIT = 15;

const Spellbook: React.FunctionComponent = () => {
  const [filteredSpells, setFilteredSpells] = useState(DEFAULT_SPELL_LIST);
  const [spellnameFilter, setSpellnameFilter] = useState('');
  const { spellsToShow, shownCounter, incrementShownCounter, resetSpellsToShow } = useSpellsToShow(filteredSpells, SHOW_SPELL_LIMIT);

  const filterSpells = (spellnameFilter: string) => {
    setSpellnameFilter(spellnameFilter);
    resetSpellsToShow();
    setFilteredSpells(DEFAULT_SPELL_LIST.filter((spell) => spell.name.toLowerCase().includes(spellnameFilter.toLowerCase())));
  };

  const isShowMoreButtonDisabled = (): boolean => (shownCounter + 1) * SHOW_SPELL_LIMIT >= filteredSpells.length;

  return (
    <div>
      <h1>Spellbook</h1>
      <SpellFilter spellnameFilter={spellnameFilter} filterSpells={filterSpells} />
      <SpellList spells={spellsToShow} />
      <GutterButton isDisabled={isShowMoreButtonDisabled()} onClick={() => incrementShownCounter()}>
        Show More
      </GutterButton>
    </div>
  );
};

export default Spellbook;
