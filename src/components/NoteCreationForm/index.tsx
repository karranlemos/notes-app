import { Input, Button } from '@material-ui/core';
import React, { useState, ChangeEventHandler, MouseEventHandler } from 'react';

import useStyles from './styles';

const NoteCreationForm: React.FC = () => {
  const classes = useStyles();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const titleOnChangeHandler: ChangeEventHandler<HTMLInputElement> = (event) => {
    setTitle(event.target.value);
  };

  const descriptionOnChangeHandler: ChangeEventHandler<HTMLTextAreaElement> = (event) => {
    setDescription(event.target.value);
  };

  const submitHandler: MouseEventHandler<HTMLButtonElement> = () => {
    console.log(title, description);
  };

  return (
    <div className={classes.noteCreationForm}>
      <Input
        placeholder="Assunto"
        disableUnderline
        onChange={titleOnChangeHandler}
        classes={{
          root: classes.title,
        }}
      />
      <Input
        placeholder="Texto"
        disableUnderline
        multiline
        onChange={descriptionOnChangeHandler}
        classes={{
          root: classes.description,
        }}
      />
      <Button
        variant="contained"
        onClick={submitHandler}
        classes={{
          root: classes.button,
        }}
      >
        Criar Nota
      </Button>
    </div>
  );
};

export default NoteCreationForm;
