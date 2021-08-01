import { makeStyles } from '@material-ui/core';

import colors from '../../app/colors';

const useStyles = makeStyles({
  pageContainer: {
    width: '100vw',
    height: '100vh',
    overflow: 'auto',
    boxSizing: 'border-box',
    backgroundColor: colors.white,
    display: 'flex',
    padding: '52px 0',
  },

  dashboardSubtitle: {
    fontSize: 28,
    color: colors.purple,
  },

  noteForm: {
    padding: '20px 40px',
    maxWidth: 500,
    width: '100%',
    borderRight: `3px solid ${colors.orange}`,
  },

  allNotes: {
    padding: '20px 40px',
    flex: 1,
  },
});

export default useStyles;
