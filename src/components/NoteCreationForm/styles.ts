import { makeStyles } from '@material-ui/core';

import colors from '../../app/colors';
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

  button: {
    alignSelf: 'flex-end',
    width: 148,
    height: 44,
    paddingTop: 10,
    paddingBottom: 10,

    backgroundColor: colors.orange,
    color: colors.white,
    fontWeight: 'bold',

    '&:hover': {
      backgroundColor: colors.orange,
    },
  },

  loading: {
    color: colors.white,
  },
});

export default useStyles;
