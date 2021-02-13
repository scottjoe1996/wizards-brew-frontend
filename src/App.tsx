import React from 'react';

import { Grid } from '@material-ui/core';

import SpellCard from './components/spell-card/spell-card';
import { Spell } from './types/spell';
import spellList from './data/spell-list.json';

const App: React.FunctionComponent = () => {
  const testSpell: Spell = spellList[Math.floor(Math.random() * spellList.length)] as Spell;

  return (
    <div>
      <h1>Test Page</h1>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <SpellCard spell={testSpell} />
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
