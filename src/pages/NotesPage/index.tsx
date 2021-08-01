import React from 'react';

import useStyles from './styles';

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
