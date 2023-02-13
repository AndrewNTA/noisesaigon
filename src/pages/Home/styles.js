import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  bg: {
    width: '100%',
  },
  main: {
    padding: '1.25rem',
    [theme.breakpoints.down('sm')]: {
      padding: '1.25rem 0',
    },
  },
  title: {
    padding: '0 0.75rem 0.5rem 0.5rem',
    fontWeight: 600,
    textTransform: 'uppercase',
    lineHeight: '1.25rem',
    borderBottom: '1px solid black',
    fontSize: '1.375rem',
  },
  showDate: {
    textTransform: 'uppercase',
    lineHeight: '1.25rem',
    borderBottom: '1px solid black',
    fontSize: '1.125rem',
    color: 'rgb(109 114 120)',
    paddingBottom: '4px',
    fontWeight: 400,
    marginTop: '2.5rem',
    marginBottom: '1rem',
  },
  showLabel: {
    color: 'rgb(224 32 32)',
    textTransform: 'uppercase',
    lineHeight: '1.25rem',
    fontSize: '1.125rem',
    fontWeight: 700,
    marginRight: '6px',
  },
  content: {
    paddingRight: '8rem',
    [theme.breakpoints.down('sm')]: {
      paddingRight: '0',
    },
  },
  leftSpacing: {
    paddingLeft: '0.75rem',
  },
  discordLogo: {
    width: '80%',
    marginTop: '12px',
  },
}));

export default useStyles;
