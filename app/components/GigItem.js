import React from 'react';
import { styled } from '@mui/material/styles';
import Event from './Event';

const GigItemWrapper = styled('div')({
  position: 'relative',
  display: 'flex',
  alignItems: 'flex-start',
});

const GigItemTime = styled('div')(({ theme }) => ({
  position: 'sticky',
  top: '1.25rem',
  textTransform: 'uppercase',
  paddingRight: '2.125rem',
  paddingLeft: '1.125rem',
  [theme.breakpoints.down('sm')]: {
    paddingRight: '1.125rem',
    paddingLeft: '1.125rem',
  },
}));

const GigItemDay = styled('div')({
  fontSize: '1.125rem',
  lineHeight: '1.75rem',
  fontWeight: 600,
  color: '#E02020',
});

const GigItemDate = styled('div')({
  fontSize: '2.25rem',
  lineHeight: '2.5rem',
  fontWeight: 600,
  color: '#000000',
});

function GigItem({ day, date, events }) {
  return (
    <GigItemWrapper>
      <GigItemTime>
        <GigItemDay>{day}</GigItemDay>
        <GigItemDate>{date}</GigItemDate>
      </GigItemTime>
      <div>
        {events &&
          events.map((ev) => (
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
    </GigItemWrapper>
  );
}

export default GigItem;
