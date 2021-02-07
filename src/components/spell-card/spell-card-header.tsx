import { CardContent, createStyles, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { Component, Level, School } from '../../types/spell';

const useStyles = makeStyles(() =>
  createStyles({
    bulletPoint: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)'
    }
  })
);

interface SpellCardHeaderProps {
  level: Level;
  school: School;
  name: string;
  components: Component[];
  isRitual: boolean;
  isConcentration: boolean;
}

const SpellCardHeader: React.FunctionComponent<SpellCardHeaderProps> = ({ level, school, name, components, isRitual, isConcentration }) => {
  const classes = useStyles();

  const getCaptionText = (): JSX.Element[] => {
    const bulletPoint = <span className={classes.bulletPoint}>•</span>;
    const captions = [<span key='components'>{components.join(', ')}</span>];

    if (isRitual) {
      captions.push(<span key='ritual'>{bulletPoint}Ritual</span>);
    }
    if (isConcentration) {
      captions.push(<span key='concentration'>{bulletPoint}Concentration</span>);
    }
    return captions;
  };

  return (
    <CardContent>
      <Typography variant='body2' color='textSecondary'>
        {`${level} ${school}`}
      </Typography>
      <Typography variant='body1'>{name}</Typography>
      <Typography variant='caption' color='textSecondary'>
        {getCaptionText()}
      </Typography>
    </CardContent>
  );
};

export default SpellCardHeader;
