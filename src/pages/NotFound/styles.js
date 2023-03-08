import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    height: "100vh",
    textAlign: 'center',
    boxSizing: 'border-box',
    paddingTop: '10vh',
  },
  img: {
    width: "600px",
    height: "auto",
    [theme.breakpoints.down("sm")]: {
        width: "320px",
      },

  },
  text: {
    margin: "40px 0",
    fontWeight: 700,
    fontSize: "2.5em",
    [theme.breakpoints.down("sm")]: {
        fontSize: "1.5em",
      },
  },
  btn: {
    backgroundColor: "rgb(224 32 32)",
    color: "#fff",
    fontWeight: 600,
    cursor: "pointer",
    display: "inline-block",
    borderRadius: "4px",
    padding: "10px 32px",
  },
}));

export default useStyles;
