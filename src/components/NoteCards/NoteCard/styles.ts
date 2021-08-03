import { makeStyles } from '@material-ui/core';

import colors from '../../../app/colors';
import elevatedBoxStyles from '../../../app/styles/elevatedFormBox';

const useStyles = makeStyles({
  cardContainer: {
    position: 'relative',
  },

  card: {
    ...elevatedBoxStyles.elevatedMultilineBox,

    height: 152,
    width: 400,
    padding: '24px 32px',

    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',

    color: colors.darkGray,
  },

  close: {
    position: 'absolute',
    top: -12,
    right: -12,

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    width: 24,
    height: 24,
    borderRadius: '100%',

    backgroundColor: colors.darkGray,

    '&:hover': {
      cursor: 'pointer',
      backgroundColor: colors.darkerGray,
    },
  },

  closeIcon: {
    color: colors.white,
    fontSize: 20,
  },

  title: {
    fontSize: 24,
    paddingBottom: 16,
    boxSizing: 'border-box',
    borderBottom: `1px dashed ${colors.darkGray}`,

    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',

    color: colors.neonGreen,
  },

  description: {
    color: colors.darkGray,
  },
});

export default useStyles;
