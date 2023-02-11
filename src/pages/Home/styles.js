import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  bg: {
    width: '100%',
  },
  main: {
    padding: '1.25rem',
  },
  title: {
    padding: '0 0.75rem 0.5rem 0.5rem',
    fontWeight: 600,
    textTransform: 'uppercase',
    lineHeight: '1.25rem',
    borderBottom: '1px solid black',
    fontSize: '1.375rem',
  },
}));

export default useStyles;
