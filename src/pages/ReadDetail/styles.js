import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  main: {
    padding: "0.25rem 0",
  },
  readName: {
    fontSize: "1.375rem",
    lineHeight: "1.75rem",
    textTransform: "uppercase",
    padding: "0 0.75rem 0.175rem 0.75rem",
    fontWeight: 600,
    color: "#000",
    marginBottom: "2rem",
    fontStyle: "italic",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.25rem",
      lineHeight: "1.5rem",
    },
  },
  readImg: {
    width: "100%",
  },
  readImgDesc: {
    lineHeight: "1.25rem",
    fontSize: "0.875rem",
    color: "#6b7280",
  },
  text: {
    lineHeight: "1.8rem",
    fontSize: "1.25rem",
    marginBottom: "0.75rem",
    margin: "1.2rem 0",
    color: "#374151",
    fontFamily: "IBM Plex Sans Condensed,sans-serif",
    '& a': {
      color: "#111",
      fontWeight: 500,
    },
    '& img': {
      maxWidth: '100% !important',
      height: 'auto',
    },
    '& h1': {
      lineHeight: '2rem'
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "1rem",
      lineHeight: "1.25rem",
    },
  },
  label: {
    lineHeight: "1.125rem",
    fontSize: "0.875rem",
    textTransform: "uppercase",
    color: "rgb(224 32 32)",
  },
  value: {
    lineHeight: "1.75rem",
    fontSize: "1.125rem",
    fontStyle: "italic",
    textTransform: "uppercase",
  },
}));

export default useStyles;
