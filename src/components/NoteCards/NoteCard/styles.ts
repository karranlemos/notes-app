import { makeStyles } from '@material-ui/core';

import colors from '../../../app/colors';
import elevatedBoxStyles from '../../../app/styles/elevatedFormBox';

const useStyles = makeStyles({
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

  title: {
    color: colors.neonGreen,
    borderBottom: `1px dashed ${colors.darkGray}`,
    fontSize: 24,
    paddingBottom: 16,
    boxSizing: 'border-box',
  },

  description: {
    color: colors.darkGray,
  },
});

export default useStyles;
