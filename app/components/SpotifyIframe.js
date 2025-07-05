import React from 'react';

function SpotifyIframe() {
  return (
    <div>
      <iframe
        title="play-list"
        style={{ borderRadius: '12px' }}
        src="https://open.spotify.com/embed/playlist/2yzLRjB2PRRpS8vZo0d9K0?si=5B8lrrGWTYyAxUlsCOzgYQ&pi=faGSWphuTDOiO?utm_source=generator&theme=0"
        width="100%"
        height="152"
        frameBorder="0"
        allowFullScreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>
  );
}

export default SpotifyIframe;
