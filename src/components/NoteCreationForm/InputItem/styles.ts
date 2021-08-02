import { makeStyles, Theme } from '@material-ui/core';

interface IStyleProps {
  hasError?: boolean;
}

const useStyles = makeStyles<Theme, IStyleProps>({
  errorText: ({ hasError = false }) => ({
    display: hasError ? 'inherit' : 'none',
  }),
});

export default useStyles;
