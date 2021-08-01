import { Input, Button } from '@material-ui/core';
import React, { useState, ChangeEventHandler, MouseEventHandler } from 'react';

import INotesProvider from '../../infra/interfaces/INotesProvider';
import useStyles from './styles';

interface INoteCreationFormProps {
  notesProvider: INotesProvider;
}

const NoteCreationForm: React.FC<INoteCreationFormProps> = ({
  notesProvider,
}) => {
  const classes = useStyles();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const titleOnChangeHandler: ChangeEventHandler<HTMLInputElement> = (event) => {
    setTitle(event.target.value);
  };

  const descriptionOnChangeHandler: ChangeEventHandler<HTMLTextAreaElement> = (event) => {
    setDescription(event.target.value);
  };

  const submitHandler: MouseEventHandler<HTMLButtonElement> = async () => {
    try {
      await notesProvider.createNotes([
        {
          title,
          description,
        },
      ]);
    } catch (error) {
      console.log(':(', error);
    }
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
