import React from "react";

function SpotifyIframe() {
  return (
    <div>
      <iframe
        title="play-list"
        style={{ borderRadius: "12px" }}
        src="https://open.spotify.com/embed/playlist/2eFKgaoITQTV4VstgdoGb8?si=4tY0USNSTomswCnMSPSTcQ&pi=FvNEJ8BrRW6We?utm_source=generator&theme=0"
        width="100%"
        height="152"
        frameBorder="0"
        allowfullscreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>
  );
}

export default SpotifyIframe;
