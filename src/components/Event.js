import React from 'react';
import InfoIcon from '@mui/icons-material/Info';
import { styled } from '@mui/material/styles';
import { formatPrice, formatDisplayTime } from 'utils';

const EventWrapper = styled('div')({
  padding: '16px',
  borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
});

const EventName = styled('div')({
  fontSize: '1.2rem',
  fontWeight: 'bold',
  marginBottom: '8px',
});

const EventExtraInfo = styled('div')({
  fontSize: '0.9rem',
  color: 'rgba(0, 0, 0, 0.6)',
  marginBottom: '8px',
});

const EventInfo = styled('div')({
  display: 'flex',
  gap: '16px',
  marginBottom: '8px',
});

const EventTime = styled('div')({
  color: 'rgba(0, 0, 0, 0.6)',
});

const EventVenue = styled('div')({
  color: 'rgba(0, 0, 0, 0.6)',
});

const EventVenueLink = styled('a')({
  color: 'rgba(0, 0, 0, 0.6)',
  textDecoration: 'none',
  '&:hover': {
    color: '#1976d2',
  },
});

const EventRow = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '8px',
});

const EventMoreInfo = styled('div')({
  display: 'flex',
  alignItems: 'center',
  color: 'rgba(0, 0, 0, 0.6)',
});

const EventMoreInfoText = styled('a')({
  color: 'rgba(0, 0, 0, 0.6)',
  textDecoration: 'none',
  '&:hover': {
    color: '#1976d2',
  },
});

const EventPrice = styled('div')({
  color: 'rgba(0, 0, 0, 0.6)',
});

const EventOptional = styled('div')({
  display: 'flex',
  gap: '8px',
  fontSize: '0.9rem',
  color: 'rgba(0, 0, 0, 0.6)',
});

const EventOptionalIcon = styled('div')({
  fontWeight: 'bold',
});

function Event({
  eventName,
  extraInfo,
  time,
  venueName,
  venueLink,
  price,
  optionalInfo,
  facebookLink,
}) {
  return (
    <EventWrapper>
      <EventName>{eventName}</EventName>
      <EventExtraInfo>{extraInfo}</EventExtraInfo>
      <EventInfo>
        <EventTime>{formatDisplayTime(time)}</EventTime>
        {venueLink ? (
          <EventVenueLink
            href={venueLink}
            target="_blank"
            rel="noreferrer"
          >
            {venueName}
          </EventVenueLink>
        ) : (
          <EventVenue>{venueName}</EventVenue>
        )}
      </EventInfo>
      <EventRow>
        <EventMoreInfo>
          <InfoIcon fontSize="small" sx={{ marginRight: '4px' }} />
          <EventMoreInfoText
            href={facebookLink}
            target="_blank"
            rel="noreferrer"
          >
            More info
          </EventMoreInfoText>
        </EventMoreInfo>
        <EventPrice>{`${formatPrice(price)} vnd`}</EventPrice>
      </EventRow>
      {optionalInfo && (
        <EventOptional>
          <EventOptionalIcon>NB:</EventOptionalIcon>
          <span>{optionalInfo}</span>
        </EventOptional>
      )}
    </EventWrapper>
  );
}

export default Event;
