import { Button, CircularProgress } from '@material-ui/core';
import React, {
  useRef,
  useState,
  ChangeEventHandler,
  MouseEventHandler,
} from 'react';

import { toastError } from '../../app/utils/toast';
import INotesProvider from '../../infra/interfaces/INotesProvider';
import { updateNotesAction } from '../../store/ducks/notesReducer/actions';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import InputItem, { IInputItemRef } from './InputItem';
import useStyles from './styles';

interface INoteCreationFormProps {
  notesProvider: INotesProvider;
}

const NoteCreationForm: React.FC<INoteCreationFormProps> = ({
  notesProvider,
}) => {
  const dispatch = useAppDispatch();
  const classes = useStyles();

  const notes = useAppSelector((state) => state.notes.notes);

  const titleRef = useRef<IInputItemRef>(null);
  const descriptionRef = useRef<IInputItemRef>(null);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);

  const titleOnChangeHandler: ChangeEventHandler<HTMLInputElement> = (event) => {
    setTitle(event.target.value);
  };

  const descriptionOnChangeHandler: ChangeEventHandler<HTMLTextAreaElement> = (event) => {
    setDescription(event.target.value);
  };

  const submitHandler: MouseEventHandler<HTMLButtonElement> = async () => {
    if (loading)
      return;

    if (title === '')
      titleRef.current?.enableError('Assunto não pode estar vazio.');

    if (description === '')
      descriptionRef.current?.enableError('Texto não pode estar vazio.');

    if (title === '' || description === '')
      return;

    setLoading(true);

    try {
      const newNotes = await notesProvider.createNotes([
        {
          title,
          description,
        },
      ]);

      dispatch(updateNotesAction(notes.concat(newNotes)));

      setTitle('');
      setDescription('');
    } catch (error) {
      toastError('Criação de nota falhou.');
    } finally {
      setLoading(false);
    }
  };

  const getButtonText = () => {
    if (!loading)
      return 'Criar Nota';

    return (
      <CircularProgress
        color="primary"
        size={24}
        classes={{
          root: classes.loading,
        }}
      />
    );
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
        {getButtonText()}
      </Button>
    </div>
  );
};

export default NoteCreationForm;
