import { CardContent, Typography } from '@material-ui/core';
import React from 'react';
import { Component, Level, School } from '../../types/spell';

interface SpellCardHeaderProps {
  level: Level;
  school: School;
  name: string;
  components: Component[];
}

const SpellCardHeader: React.FunctionComponent<SpellCardHeaderProps> = ({ level, school, name, components }) => {
  return (
    <CardContent>
      <Typography variant='body2' color='textSecondary'>
        {`${level} ${school}`}
      </Typography>
      <Typography variant='body1'>{name}</Typography>
      <Typography variant='caption'>{components.join(', ')}</Typography>
    </CardContent>
  );
};

export default SpellCardHeader;
