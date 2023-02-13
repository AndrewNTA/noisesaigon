import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  main: {
    minHeight: '50vh',
    textAlign: 'center',
  },
  pageName: {
    textTransform: 'uppercase',
    fontSize: '4rem',
    fontWeight: 600,
    marginBottom: '64px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '2rem',
    },
  },
  pageDesc: {
    textTransform: 'uppercase',
    fontSize: '2rem',
    fontWeight: 500,
    color: 'rgb(224 32 32)',
    fontStyle: 'italic',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.25rem',
    },
  },
}));

export default useStyles;
