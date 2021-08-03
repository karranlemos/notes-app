import React, { useEffect } from 'react';

import { useWindowSize } from '../../app/utils/hooks';
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

  const { isMobile } = useWindowSize();
  const classes = useStyles({ isMobile });

  const notes: INote[] = useAppSelector((state) => state.notes.notes);

  const getInitialNotes = async () => {
    try {
      const notes: INote[] = await notesProvider.getNotes();
      dispatch(updateNotesAction(notes));
    } catch (error) {
      toastError('Falha ao buscar notas.');
    }
  };

  useEffect(() => {
    getInitialNotes();
  }, []);

  const notesDeleterHandler = async (id: number) => {
    try {
      await notesProvider.deleteNotes([id]);
      await getInitialNotes();
    } catch (error) {
      toastError('Não foi possível excluir nota.');
    }
  };

  const getElementNotes = () => {
    if (notes.length === 0)
      return 'Sem notas.';

    return notes.map((note) => (
      <NoteCard
        title={note.title}
        description={note.description}
        onClickCloseButton={() => notesDeleterHandler(note.id)}
      />
    ));
  };

  return (
    <div className={classes.cards}>
      {getElementNotes()}
    </div>
  );
};

export default NoteCards;
