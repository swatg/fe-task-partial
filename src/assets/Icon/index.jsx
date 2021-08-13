import React from 'react';
import icons from './icons';

const getKeyValue = (key) => (obj) => obj[key];

function Icon({ fill, icon, size=32 }) {
  return (
    <svg height={size} width={size} viewBox="0 0 24 24">
      <path
        fill={fill}
        d={getKeyValue(icon)(icons)}
      />
    </svg>
  );
}

export default Icon;
