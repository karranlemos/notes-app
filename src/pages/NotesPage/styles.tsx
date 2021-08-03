import { makeStyles, Theme } from '@material-ui/core';

import colors from '../../app/colors';

interface IStyleProps {
  isMobile: boolean | null,
}

interface IStyles {
  [key: string]: string | number
}

const useStyles = makeStyles<Theme, IStyleProps>({
  pageContainer: ({ isMobile }) => ({
    display: 'flex',
    flexDirection: isMobile ? 'column' : 'row',
    width: '100vw',
    height: '100vh',
    overflow: 'auto',
    boxSizing: 'border-box',
    backgroundColor: colors.white,
    padding: isMobile
      ? '0 52px'
      : '52px 0',
  }),

  dashboardSubtitle: {
    fontSize: 28,
    color: colors.purple,
    fontWeight: 'bold',
  },

  noteForm: ({ isMobile }) => {
    const styles: IStyles = {
      padding: isMobile
        ? '20px 0px'
        : '20px 40px',
      maxWidth: isMobile
        ? 'none'
        : 500,
      width: '100%',
      borderRight: 'none',
      borderBottom: 'none',
    };

    if (isMobile)
      styles.borderBottom = `3px solid ${colors.orange}`;
    else
      styles.borderRight = `3px solid ${colors.orange}`;

    return styles;
  },

  allNotes: ({ isMobile }) => ({
    padding: isMobile
      ? '20px 0'
      : '20px 40px',
    flex: 1,
    overflowY: isMobile ? 'visible' : 'auto',
  }),
});

export default useStyles;
