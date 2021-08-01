import React from 'react';

import NoteCreationForm from '../../components/NoteCreationForm';
import NotesProvider from '../../infra/implementations/http/NotesProvider';
import useStyles from './styles';

const notesProvider = new NotesProvider();

const NotesPage: React.FC = () => {
  const classes = useStyles();

  return (
    <div
      className={classes.pageContainer}
    >
      <div
        className={classes.noteForm}
      >
        <h2 className={classes.dashboardSubtitle}>
          Bloco de Notas
        </h2>
        <NoteCreationForm notesProvider={notesProvider} />
      </div>
      <div
        className={classes.allNotes}
      >
        <h2 className={classes.dashboardSubtitle}>
          Suas Notas
        </h2>
      </div>
    </div>
  );
};

export default NotesPage;
