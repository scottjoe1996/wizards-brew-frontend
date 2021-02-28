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
  const [spellnameFilter, setSpellnameFilter] = useState('');
  const { spellsToShow, shownCounter, incrementShownCounter } = useSpellsToShow(DEFAULT_SPELL_LIST, SHOW_SPELL_LIMIT);

  const isShowMoreButtonDisabled = (): boolean => (shownCounter + 1) * SHOW_SPELL_LIMIT >= DEFAULT_SPELL_LIST.length;

  return (
    <div>
      <h1>Spellbook</h1>
      <SpellFilter spellnameFilter={spellnameFilter} setSpellnameFilter={setSpellnameFilter} />
      <SpellList spells={spellsToShow} />
      <GutterButton isDisabled={isShowMoreButtonDisabled()} onClick={() => incrementShownCounter()}>
        Show More
      </GutterButton>
    </div>
  );
};

export default Spellbook;
