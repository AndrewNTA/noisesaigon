import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  section: {
    fontSize: '1.375rem',
    lineHeight: '1.75rem',
    textTransform: 'uppercase',
    borderBottom: '1px solid #000',
    padding: '0 0.75rem 0.175rem 0.75rem',
    fontWeight: 600,
    color: '#000',
  },
  title: {
    lineHeight: '1.25rem',
    fontStyle: 'italic',
    fontWeight: 700,
    textTransform: 'uppercase',
    fontSize: '1.125rem',
    paddingLeft: '0.75rem',
    borderLeft: '2px solid #E02020',
    marginBottom: '2rem',
  },
  link: {
    lineHeight: '1.75rem',
    fontSize: '0.875rem',
    paddingLeft: '0.75rem',
    fontWeight: 600,
    cursor: 'pointer',
    color: '#000',
    textDecorationLine: 'none',
    '&:hover': {
      color: '#E02020',
    },
  },
  text: {
    lineHeight: '1.125rem',
    fontSize: '0.875rem',
    paddingLeft: '0.75rem',
    paddingRight: '4rem',
    marginBottom: '0.5rem',
    textAlign: 'justify',
    [theme.breakpoints.down('sm')]: {
      paddingRight: 0,
    },
  },
  bg: {
    width: '100%',
  },
}));

export default useStyles;
