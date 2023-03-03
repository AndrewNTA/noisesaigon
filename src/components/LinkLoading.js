import React from "react";
import { Skeleton, Typography } from "@mui/material";
import { Spacing } from "components";

function LinkLoading({ length }) {
  const arr = Array.from({ length }, (v, i) => i);
  return (
    <>
      {arr.map((a) => (
        <div key={a} style={{ marginBottom: "32px", padding: "0 16px" }}>
          <Typography component="div" key="h4" variant="h4">
            <Skeleton width="30%" animation="false"/>
          </Typography>
          <Spacing size={24} />
          <Skeleton width="60%" />
          <Spacing size={12} />
          <Skeleton animation="wave" />
        </div>
      ))}
    </>
  );
}

export default LinkLoading;
