import { makeStyles } from '@material-ui/core';

import elevatedBoxStyles from '../../app/styles/elevatedFormBox';

const useStyles = makeStyles({
  noteCreationForm: {
    display: 'flex',
    flexDirection: 'column',
    gap: 20,
    overflow: 'auto',
    maxHeight: '100%',
    padding: 4,
  },

  title: {
    ...elevatedBoxStyles.elevatedBox,
  },

  description: {
    ...elevatedBoxStyles.elevatedMultilineBox,
    minHeight: 200,
  },
});

export default useStyles;
