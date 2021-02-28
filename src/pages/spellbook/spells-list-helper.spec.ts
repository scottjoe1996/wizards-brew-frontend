import { act, Renderer, renderHook, RenderHookResult } from '@testing-library/react-hooks';

import { Spell } from '../../types/spell';

import useSpellsToShow, { UseSpellsToShow } from './spells-list-helper';

const TEST_SPELL_LIST = [
  {
    name: 'Absorb Elements'
  },
  {
    name: 'Acid Splash'
  },
  {
    name: "Aganazzar's Scorcher"
  },
  {
    name: 'Aid'
  },
  {
    name: 'Alarm'
  }
] as Pick<Spell, 'name'>[];

const TEST_SHOW_SPELL_LIMIT = 2;

let testHelper: RenderHookResult<unknown, UseSpellsToShow, Renderer<unknown>>;

beforeEach(() => {
  testHelper = renderHook(() => useSpellsToShow(TEST_SPELL_LIST as Spell[], TEST_SHOW_SPELL_LIMIT));

  act(() => {
    testHelper.result.current.resetSpellsToShow();
  });
});

describe('UseSpellsToShow', () => {
  it('should return the show limit number of spells when shownCounter is 0', () => {
    testHelper = renderHook(() => useSpellsToShow(TEST_SPELL_LIST as Spell[], TEST_SHOW_SPELL_LIMIT));
    expect(testHelper.result.current.spellsToShow.length).toBe(TEST_SHOW_SPELL_LIMIT);
  });

  describe('incrementShownCounter', () => {
    it('should increment the shownCounter by 1', () => {
      testHelper = renderHook(() => useSpellsToShow(TEST_SPELL_LIST as Spell[], TEST_SHOW_SPELL_LIMIT));
      expect(testHelper.result.current.shownCounter).toBe(0);
      act(() => testHelper.result.current.incrementShownCounter());
      expect(testHelper.result.current.shownCounter).toBe(1);
    });

    it('should increment the number of spells shown by the show limit number', () => {
      testHelper = renderHook(() => useSpellsToShow(TEST_SPELL_LIST as Spell[], TEST_SHOW_SPELL_LIMIT));
      act(() => testHelper.result.current.incrementShownCounter());
      expect(testHelper.result.current.spellsToShow.length).toBe(TEST_SHOW_SPELL_LIMIT * 2);
    });

    it('should return the maximum number of spells when there are no more spells to show', () => {
      testHelper = renderHook(() => useSpellsToShow(TEST_SPELL_LIST as Spell[], TEST_SHOW_SPELL_LIMIT));
      act(() => testHelper.result.current.incrementShownCounter());
      act(() => testHelper.result.current.incrementShownCounter());
      act(() => testHelper.result.current.incrementShownCounter());
      expect(testHelper.result.current.spellsToShow.length).toBe(TEST_SPELL_LIST.length);
    });
  });

  describe('resetSpellsToShow', () => {
    it('should reset the shown spells to show the show limit number of spells', () => {
      testHelper = renderHook(() => useSpellsToShow(TEST_SPELL_LIST as Spell[], TEST_SHOW_SPELL_LIMIT));
      act(() => testHelper.result.current.incrementShownCounter());
      act(() => {
        testHelper.result.current.resetSpellsToShow();
      });
      expect(testHelper.result.current.spellsToShow.length).toBe(2);
    });
  });
});
