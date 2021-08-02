import { Button } from '@material-ui/core';
import React, {
  useRef,
  useState,
  ChangeEventHandler,
  MouseEventHandler,
} from 'react';

import { toastSuccess, toastError } from '../../app/utils/toast';
import INotesProvider from '../../infra/interfaces/INotesProvider';
import InputItem, { IInputItemRef } from './InputItem';
import useStyles from './styles';

interface INoteCreationFormProps {
  notesProvider: INotesProvider;
}

const NoteCreationForm: React.FC<INoteCreationFormProps> = ({
  notesProvider,
}) => {
  const classes = useStyles();

  const titleRef = useRef<IInputItemRef>(null);
  const descriptionRef = useRef<IInputItemRef>(null);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const titleOnChangeHandler: ChangeEventHandler<HTMLInputElement> = (event) => {
    setTitle(event.target.value);
  };

  const descriptionOnChangeHandler: ChangeEventHandler<HTMLTextAreaElement> = (event) => {
    setDescription(event.target.value);
  };

  const submitHandler: MouseEventHandler<HTMLButtonElement> = async () => {
    if (title === '')
      titleRef.current?.enableError('Assunto não pode estar vazio.');

    if (description === '')
      descriptionRef.current?.enableError('Texto não pode estar vazio.');

    if (title === '' || description === '')
      return;

    try {
      await notesProvider.createNotes([
        {
          title,
          description,
        },
      ]);

      setTitle('');
      setDescription('');
      toastSuccess('Nota criada com sucesso!');
    } catch (error) {
      toastError('Criação de nota falhou.');
    }
  };

  return (
    <div className={classes.noteCreationForm}>
      <InputItem
        value={title}
        ref={titleRef}
        placeholder="Assunto"
        onChange={titleOnChangeHandler}
        inputClasses={classes.title}
      />
      <InputItem
        value={description}
        ref={descriptionRef}
        placeholder="Texto"
        onChange={descriptionOnChangeHandler}
        inputClasses={classes.description}
        multiline
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
