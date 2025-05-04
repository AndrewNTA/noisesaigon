import React from 'react';

function Spacing({ size, color }) {
  return (
    <div
      style={{
        width: '100%',
        height: `${size}px`,
        backgroundColor: color ? color : 'transparent',
      }}
    />
  );
}

export default Spacing;
