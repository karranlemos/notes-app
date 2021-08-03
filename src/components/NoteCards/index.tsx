import React, { useEffect } from 'react';

import { toastError } from '../../app/utils/toast';
import INotesProvider, { INote } from '../../infra/interfaces/INotesProvider';
import { updateNotesAction } from '../../store/ducks/notesReducer/actions';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import NoteCard from './NoteCard';
import useStyles from './styles';

export interface INoteCardsParams {
  notesProvider: INotesProvider;
}

const NoteCards: React.FC<INoteCardsParams> = ({
  notesProvider,
}) => {
  const dispatch = useAppDispatch();
  const classes = useStyles();

  const notes: INote[] = useAppSelector((state) => state.notes.notes);

  useEffect(() => {
    const getInitialNotes = async () => {
      try {
        const notes: INote[] = await notesProvider.getNotes();
        dispatch(updateNotesAction(notes));
      } catch (error) {
        toastError('Falha ao buscar notas.');
      }
    };

    getInitialNotes();
  }, []);

  const elementNotes = notes.map((note) => (
    <NoteCard
      title={note.title}
      description={note.description}
    />
  ));

  return (
    <div className={classes.cards}>
      {elementNotes}
    </div>
  );
};

export default NoteCards;
