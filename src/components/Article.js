import React from 'react';
import useStyles from './styles';

function Article({ title, content }) {
  const classes = useStyles();
  return (
    <div className={classes.aWrapper}>
      <h4 className={classes.aTitle}>{title}</h4>
      <div>{content}</div>
    </div>
  );
}

export default Article;
