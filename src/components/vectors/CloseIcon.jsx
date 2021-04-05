import React from 'react';

function CloseIcon(props) {
  return (
    <svg
      width='26'
      height='26'
      viewBox='0 0 26 26'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <rect
        width='30'
        height='4'
        rx='2'
        transform='matrix(0.707107 0.707107 0.707107 -0.707107 0.978516 3.80762)'
        fill='#152647'
      />
      <rect
        x='25.0195'
        y='3.80762'
        width='30'
        height='4'
        rx='2'
        transform='rotate(135 25.0195 3.80762)'
        fill='#152647'
      />
    </svg>
  );
}

export default CloseIcon;
