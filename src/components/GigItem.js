import React from 'react';
import Show from './Show';
import useStyles from './styles';
function GigItem({ day, date, gigs }) {
  const classes = useStyles();
  return (
    <div className={classes.giWrapper}>
      <div className={classes.giTime}>
        <div className={classes.giDay}>{day}</div>
        <div className={classes.giDate}>{date}</div>
      </div>
      <div className={classes.giGigs}>
        {gigs.map((g) => (
          <Show
            key={g.name}
            name={g.name}
            time={g.time}
            location={g.location}
            artists={g.artists}
          />
        ))}
      </div>
    </div>
  );
}

export default GigItem;
