import { Card, CardActions, CardContent, Collapse, createStyles, Divider, IconButton, makeStyles, Typography, Theme } from '@material-ui/core';
import clsx from 'clsx';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import React from 'react';
import { Spell } from '../../types/spell';
import SpellCardHeader from './spell-card-header';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    description: {
      whiteSpace: 'pre-line'
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest
      })
    },
    expandOpen: {
      transform: 'rotate(180deg)'
    }
  })
);
interface SpellCardProps {
  spell: Spell;
}

const SpellCard: React.FunctionComponent<SpellCardProps> = ({ spell }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card raised>
      <SpellCardHeader name={spell.name} level={spell.level} school={spell.school} components={spell.components}></SpellCardHeader>
      <Divider variant='middle' />
      <CardActions disableSpacing>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label='show more'
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout='auto' unmountOnExit>
        <CardContent>
          <Typography variant='body2' color='textSecondary' className={classes.description}>
            {spell.description}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default SpellCard;
