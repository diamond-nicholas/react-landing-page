import React from 'react';

function Menu(props) {
  return (
    <svg
      width='30'
      height='24'
      viewBox='0 0 30 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M3 4C3 1.79086 4.79086 0 7 0H23C25.2091 0 27 1.79086 27 4H3Z'
        fill='#152647'
      />
      <path
        d='M3 20C3 22.2091 4.79086 24 7 24H23C25.2091 24 27 22.2091 27 20H3Z'
        fill='#152647'
      />
      <rect
        width='30'
        height='4'
        rx='2'
        transform='matrix(1 0 0 -1 0 14)'
        fill='#152647'
      />
    </svg>
  );
}

export default Menu;
