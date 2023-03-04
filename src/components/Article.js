import React from "react";
import { useNavigate } from "react-router-dom";
import { Spacing } from "components";
import useStyles from "./styles";

function Article({ title, content, id }) {
  const classes = useStyles();
  const navigate = useNavigate();
  const goToReadDetail = () => {
    navigate(`/reads/${id}`);
  };

  return (
    <div id={id}>
      <div className={classes.aTitle} onClick={goToReadDetail}>
        {title}
      </div>
      <div className={classes.aContent}>{content}</div>
      <Spacing size={32} />
    </div>
  );
}

export default Article;
