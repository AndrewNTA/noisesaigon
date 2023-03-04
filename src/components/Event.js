import React, { useState } from "react";
import InfoIcon from "@mui/icons-material/Info";
import { MoreInfoModal } from "components";
import { formatPrice, formatDisplayTime } from "utils";
import useStyles from "./styles";

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
  const [isOpen, setIsOpen] = useState(false);
  const classes = useStyles();

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <div className={classes.eventWrapper}>
      <div className={classes.eventName}>{eventName}</div>
      <div className={classes.eventExtraInfo}>{extraInfo}</div>
      <div className={classes.eventInfo}>
        <div className={classes.eventTime}>{formatDisplayTime(time)}</div>
        {venueLink ? (
          <a
            href={venueLink}
            target="_blank"
            rel="noreferrer"
            className={classes.eventVenueLink}
          >
            {venueName}
          </a>
        ) : (
          <div className={classes.eventVenue}>{venueName}</div>
        )}
      </div>
      <div className={classes.eventRow}>
        <div className={classes.eventMoreInfo}>
          <InfoIcon fontSize="small" sx={{ marginRight: "4px" }} />
          <div onClick={handleOpenModal} className={classes.eventMoreInfoText}>
            More info
          </div>
        </div>
        <div className={classes.eventPrice}>{`${formatPrice(price)} vnd`}</div>
      </div>
      {optionalInfo && (
        <div className={classes.eventOptional}>
          <div className={classes.eventOptionalIcon}>NB:</div>
          <span>{optionalInfo}</span>
        </div>
      )}

      <MoreInfoModal
        isOpen={isOpen}
        onClose={handleCloseModal}
        src={facebookLink}
      />
    </div>
  );
}

export default Event;
