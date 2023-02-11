import React from 'react';
import useStyles from './styles';

function InfoBox({ title, content }) {
  const classes = useStyles();
  return (
    <div className={classes.ibWrapper}>
      <div className={classes.ibTitle}>{title}</div>
      <div className={classes.ibContent}>{content}</div>
    </div>
  );
}

export default InfoBox;
