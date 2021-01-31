import { Grid } from '@material-ui/core';
import React from 'react';
import SpellCard from './components/spell-card/spell-card';
import { Spell } from './types/spell';

const App: React.FunctionComponent = () => {
  const testSpell: Spell = {
    name: "Rary's Telepathic Bond",
    description:
      'You forge a telepathic link among up to eight willing creatures of your choice within range, psychically linking each creature to all the others for the duration. Creatures with Intelligence scores of 2 or less aren’t affected by this spell.\n\nUntil the spell ends, the targets can communicate telepathically through the bond whether or not they have a common language. The communication is possible over any distance, though it can’t extend to other planes of existence.',
    range: '30 feet',
    components: ['V', 'S', 'M'],
    material: 'Pieces of eggshell from two different kinds of creatures.',
    ritual: true,
    duration: '1 hour',
    concentration: false,
    castingTime: '1 action',
    level: '5th-level',
    school: 'Divination',
    class: ['Wizard']
  };
  return (
    <div>
      <h1>Test Page</h1>
      <Grid item xs={6}>
        <SpellCard spell={testSpell} />
      </Grid>
    </div>
  );
};

export default App;
