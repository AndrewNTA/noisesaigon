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
  btnMoreGigs: {
    padding: '6px 12px',
    borderRadius: '2px',
    border: '2px solid #000',
    cursor: 'pointer',
    marginTop: '20px',
    fontSize: '1.125rem',
    lineHeight: '1.25rem',
    fontWeight: 600,
    display: 'flex',
    alignItems: 'center',
  },
  content: {
    paddingRight: '7rem',
  },
}));

export default useStyles;
