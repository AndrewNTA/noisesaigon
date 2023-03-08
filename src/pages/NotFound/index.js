import React from "react";
import { useNavigate } from "react-router-dom";
import Image from "static/images/not-found.png";
import useStyles from "./styles";

function NotFound() {
  const classes = useStyles();
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };

  return (
    <div className={classes.container}>
      <img src={Image} className={classes.img} alt="404 not found" />
      <div className={classes.text}>Oops! Page not found</div>
      <div className={classes.btn} onClick={goHome}>
        Back to Home page
      </div>
    </div>
  );
}

export default NotFound;
