import { Input } from '@material-ui/core';
import React from 'react';

import useStyles from './styles';

const NoteCreationForm: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.noteCreationForm}>
      <Input
        placeholder="Assunto"
        disableUnderline
        classes={{
          root: classes.title,
        }}
      />
      <Input
        placeholder="Texto"
        disableUnderline
        multiline
        classes={{
          root: classes.description,
        }}
      />
    </div>
  );
};

export default NoteCreationForm;
