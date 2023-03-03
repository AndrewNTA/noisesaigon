import React, { useState } from "react";
import InfoIcon from "@mui/icons-material/Info";
import { MoreInfoModal } from "components";
import { formatPrice } from "utils";
import useStyles from "./styles";

function Show({ name, artists, time, location }) {
  const [isOpen, setIsOpen] = useState(false);
  const classes = useStyles();

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <div className={classes.showWrapper}>
      <div className={classes.showName}>{name}</div>
      <div className={classes.showArtists}>{artists}</div>
      <div className={classes.showInfo}>
        <div className={classes.showTime}>{time}</div>
        <div className={classes.showLocation}>{location}</div>
      </div>
      <div className={classes.showRow}>
        <div className={classes.showMoreInfo}>
          <InfoIcon fontSize="small" sx={{ marginRight: "4px" }} />
          <div onClick={handleOpenModal} className={classes.showMoreInfoText}>
            More info
          </div>
        </div>
        <div className={classes.showPrice}>{`${formatPrice(250000)} vnd`}</div>
      </div>
      <div className={classes.showOptional}>
        <div className={classes.showOptionalIcon}>NB:</div>
        <span>Something special for you</span>
      </div>

      <MoreInfoModal
        isOpen={isOpen}
        onClose={handleCloseModal}
        src={"https://www.facebook.com/noisesaigon"}
      />
    </div>
  );
}

export default Show;
