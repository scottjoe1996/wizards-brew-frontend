import { Box, createStyles, makeStyles, TextField } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles(() =>
  createStyles({
    filterContainer: {
      paddingBottom: '16px'
    }
  })
);

interface SpellFilterProps {
  spellnameFilter: string;
  setSpellnameFilter: React.Dispatch<React.SetStateAction<string>>;
}

const SpellFilter: React.FunctionComponent<SpellFilterProps> = ({ spellnameFilter, setSpellnameFilter }) => {
  const classes = useStyles();

  return (
    <Box className={classes.filterContainer}>
      <TextField
        id='spellname-filter'
        label='Spellname'
        variant='outlined'
        value={spellnameFilter}
        onChange={(event) => {
          setSpellnameFilter(event.target.value);
        }}
        inputProps={{
          spellCheck: true,
          lang: 'language'
        }}
      />
    </Box>
  );
};

export default SpellFilter;
