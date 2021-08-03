import { makeStyles, Theme } from '@material-ui/core';

export interface IStylesProps {
  isMobile: boolean | null;
}

const useStyles = makeStyles<Theme, IStylesProps>({
  cards: ({ isMobile }) => ({
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: isMobile ? 'center' : 'start',
    gap: 20,
  }),
});

export default useStyles;
