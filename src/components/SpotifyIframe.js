import React from 'react';

function SpotifyIframe() {
  return (
    <div>
      <iframe
        title="play-list"
        style={{ borderRadius: '12px' }}
        src="https://open.spotify.com/embed/playlist/5iQbo8qiLvYbR4b9UMHHCY?si=_aQxsyfrRD2MTLRHSozCSg&pi=faGSWphuTDOiO?utm_source=generator&theme=0"
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
