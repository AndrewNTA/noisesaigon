import React from 'react';
import InfoIcon from '@mui/icons-material/Info';
import { styled } from '@mui/material';
import { formatPrice, formatDisplayTime } from '../utils';

const EventWrapper = styled('div')({
  marginBottom: '16px',
  paddingLeft: '0.75rem',
});

const EventName = styled('div')({
  lineHeight: '1.5rem',
  textTransform: 'uppercase',
  fontSize: '1.125rem',
  fontWeight: 700,
  fontStyle: 'italic',
});

const EventExtraInfo = styled('div')({
  lineHeight: '1.25rem',
  textTransform: 'uppercase',
  fontSize: '0.875rem',
  fontWeight: 600,
});

const EventInfo = styled('div')({
  display: 'flex',
  alignItems: 'center',
});

const EventTime = styled('div')({
  lineHeight: '1.25rem',
  textTransform: 'uppercase',
  fontSize: '0.875rem',
  color: '#7f7f7f',
  marginRight: '0.75rem',
  paddingRight: '0.75rem',
  borderRight: '1px solid #7f7f7f',
});

const EventVenue = styled('div')({
  lineHeight: '1.25rem',
  textTransform: 'uppercase',
  fontSize: '0.875rem',
  color: '#7f7f7f',
});

const EventVenueLink = styled('a')({
  lineHeight: '1.25rem',
  textTransform: 'uppercase',
  fontSize: '0.875rem',
  color: '#7f7f7f',
  cursor: 'pointer',
  textDecorationLine: 'none',
});

const EventMoreInfo = styled('div')({
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
});

const EventMoreInfoText = styled('a')({
  lineHeight: '1.25rem',
  fontSize: '0.875rem',
  color: '#000',
  '&:hover': {
    textDecorationLine: 'underline',
    color: '#E02020',
  },
});
const EventRow = styled('div')({
  marginTop: '6px',
  display: 'flex',
  alignItems: 'center',
});

const EventPrice = styled('div')({
  marginLeft: '16px',
  fontWeight: 700,
  fontSize: '0.875rem',
  lineHeight: '1.25rem',
});

const EventOptional = styled('div')({
  marginTop: '0.75rem',
  backgroundColor: '#FEFCE8',
  border: '1px solid #000',
  borderRadius: '2px',
  padding: '0.5rem 1rem 0.5rem 1.5rem',
  position: 'relative',
  minHeight: '26px',
  fontSize: '0.875rem',
  lineHeight: '1.25rem',
  fontStyle: 'italic',
});

const EventOptionalIcon = styled('div')({
  height: '36px',
  width: '36px',
  backgroundColor: '#333',
  borderRadius: '50%',
  display: 'inline-block',
  textAlign: 'center',
  color: '#fff',
  fontSize: '14px',
  lineHeight: '36px',
  fontWeight: 600,
  position: 'absolute',
  top: '2px',
  left: '-18px',
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
          <EventVenueLink href={venueLink} target="_blank" rel="noreferrer">
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
