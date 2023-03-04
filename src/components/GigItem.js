import React from 'react';
import Event from './Event';
import useStyles from './styles';
function GigItem({ day, date, events }) {
  const classes = useStyles();
  return (
    <div className={classes.giWrapper}>
      <div className={classes.giTime}>
        <div className={classes.giDay}>{day}</div>
        <div className={classes.giDate}>{date}</div>
      </div>
      <div className={classes.giGigs}>
        {events && events.map((ev) => (
          <Event
            key={ev.id}
            eventName={ev.eventName}
            time={ev.time}
            venueLink={ev.venueLink}
            venueName={ev.venueName}
            facebookLink={ev.facebookLink}
            optionalInfo={ev.optionalInfo}
            extraInfo={ev.extraInfo}
            price={ev.price}
          />
        ))}
      </div>
    </div>
  );
}

export default GigItem;
