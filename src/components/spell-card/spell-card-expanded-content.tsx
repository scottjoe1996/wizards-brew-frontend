import { CardContent, createStyles, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { Class } from '../../types/spell';

const useStyles = makeStyles(() =>
  createStyles({
    description: {
      whiteSpace: 'pre-line'
    },
    heading: {
      fontWeight: 'bold'
    }
  })
);

interface SpellCardExpandedContentProps {
  materials?: string;
  description: string;
  atHigherLevels?: string;
  usableInClasses: Class[];
}

const SpellCardExpandedContent: React.FunctionComponent<SpellCardExpandedContentProps> = ({
  materials: material,
  description,
  atHigherLevels,
  usableInClasses
}) => {
  const classes = useStyles();

  return (
    <CardContent>
      {material && (
        <Typography variant='body2' color='textSecondary' paragraph>
          <span className={classes.heading}>Materials: </span>
          {material}
        </Typography>
      )}
      <Typography variant='body2' color='textSecondary' paragraph className={classes.description}>
        {description}
      </Typography>
      {atHigherLevels && (
        <Typography variant='body2' color='textSecondary' paragraph>
          <span className={classes.heading}>At higher levels: </span>
          {atHigherLevels}
        </Typography>
      )}
      {usableInClasses.length !== 0 && (
        <Typography variant='body2' color='textSecondary'>
          <span className={classes.heading}>Classes: </span>
          {usableInClasses.join(', ')}
        </Typography>
      )}
    </CardContent>
  );
};

export default SpellCardExpandedContent;
