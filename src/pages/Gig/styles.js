import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  bg: {
    width: "100%",
  },
  main: {
    padding: "0 1.5rem",
    [theme.breakpoints.down("sm")]: {
      padding: "0",
    },
  },
  section: {
    fontSize: "0.875rem",
    lineHeight: "1.125rem",
    color: "#374151",
  },
  title: {
    fontSize: "1.375rem",
    lineHeight: "1.75rem",
    textTransform: "uppercase",
    borderBottom: "1px solid #000",
    padding: "0 0.75rem 0.175rem 0.75rem",
    fontWeight: 500,
    color: "#000",
  },
  sendEmailBtn: {
    padding: "8px 12px",
    borderRadius: "4px",
    border: "2px solid #000",
    cursor: "pointer",
    marginTop: "20px",
    fontSize: "1.125rem",
    lineHeight: "1.25rem",
    fontWeight: 600,
    display: "flex",
    alignItems: "center",
    textTransform: "uppercase",
    color: "#000",
    textDecorationLine: "none",
    "&:hover": {
      border: "2px solid rgb(224 32 32)",
      color: "rgb(224 32 32)",
    },
  },
}));

export default useStyles;
