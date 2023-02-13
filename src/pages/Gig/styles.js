import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  bg: {
    width: '100%',
  },
  main: {
    padding: '0 1.5rem',
    [theme.breakpoints.down('sm')]: {
      padding: '0',
    },
  },
  section: {
    fontSize: '0.875rem',
    lineHeight: '1.125rem',
    color: '#374151',
  },
  title: {
    fontSize: '1.375rem',
    lineHeight: '1.75rem',
    textTransform: 'uppercase',
    borderBottom: '1px solid #000',
    padding: '0 0.75rem 0.175rem 0.75rem',
    fontWeight: 500,
    color: '#000',
  },
  link: {
    color: '#000',
    fontWeight: 500,
  },
}));

export default useStyles;
