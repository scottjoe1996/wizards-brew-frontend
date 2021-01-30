import { Card, CardContent, CardHeader, Typography } from '@material-ui/core';
import React from 'react';
import { Spell } from '../../types/spell';

interface SpellCardProps {
  spell: Spell;
}

const SpellCard: React.FunctionComponent<SpellCardProps> = ({ spell }) => {
  return (
    <Card>
      <CardHeader title={spell.name} subheader={spell.school} />
      <CardContent>
        <Typography variant='body2' color='textSecondary' style={{ whiteSpace: 'pre-line' }}>
          {spell.description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default SpellCard;
