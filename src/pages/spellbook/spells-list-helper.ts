import { useCallback, useEffect, useState } from 'react';
import { Spell } from '../../types/spell';

export interface UseSpellsToShow {
  spellsToShow: Spell[];
  shownCounter: number;
  resetSpellsToShow: () => void;
  incrementShownCounter: () => void;
}

let previousShownSpells: Spell[] = [];

const useSpellsToShow = (spellList: Spell[], showSpellLimit: number): UseSpellsToShow => {
  const [spellsToShow, setSpellsToShow] = useState([] as Spell[]);
  const [shownCounter, setShownCounter] = useState(0);

  const resetSpellsToShow: () => void = useCallback(() => {
    previousShownSpells = [];
    setShownCounter(0);
    setSpellsToShow([]);
  }, []);

  const incrementShownCounter: () => void = useCallback(() => {
    setShownCounter(shownCounter + 1);
  }, [shownCounter]);

  useEffect(() => {
    const shownSoFar = shownCounter * showSpellLimit;
    const spellsToAdd = spellList.slice(shownSoFar, shownSoFar + showSpellLimit);

    previousShownSpells = [...previousShownSpells, ...spellsToAdd];

    setSpellsToShow(previousShownSpells);
  }, [shownCounter, spellList, showSpellLimit]);

  return { spellsToShow, shownCounter, resetSpellsToShow, incrementShownCounter };
};

export default useSpellsToShow;
