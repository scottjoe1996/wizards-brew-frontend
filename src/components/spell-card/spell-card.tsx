import { Card, CardActions, Collapse, createStyles, Divider, makeStyles, Theme } from '@material-ui/core';

import React from 'react';

import { Spell } from '../../types/spell';

import SpellCardHeader from './spell-card-header';
import SpellCardSubHeader from './spell-card-sub-header';
import ExpandMoreButton from '../buttons/expand-more-button/expand-more-button';
import SpellCardExpandedContent from './spell-card-expanded-content';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    spellCard: {
      minWidth: 'min-content'
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
    <Card raised className={classes.spellCard}>
      <SpellCardHeader
        name={spell.name}
        level={spell.level}
        school={spell.school}
        components={spell.components}
        isRitual={spell.isRitual}
        isConcentration={spell.isConcentration}
      />
      <Divider variant='middle' />
      <CardActions disableSpacing>
        <SpellCardSubHeader castingTime={spell.castingTime} range={spell.range} duration={spell.duration} />
        <ExpandMoreButton isDown={expanded} handleClick={handleExpandClick} />
      </CardActions>
      <Collapse in={expanded} timeout='auto' unmountOnExit>
        <SpellCardExpandedContent materials={spell.materials} description={spell.description} usableInClasses={spell.usableInClasses} />
      </Collapse>
    </Card>
  );
};

export default SpellCard;
