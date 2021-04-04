import * as React from 'react';

function Feature1Icon(props) {
  return (
    <svg
      width='2em'
      height='2em'
      viewBox='0 0 25 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <g clipPath='url(#prefix__clip0)'>
        <path d='M18.88 10h6l-3-4-3 4zm0 4h6l-3 4-3-4z' fill='#1B1464' />
        <path d='M1.88 0h6v24h-6a1 1 0 01-1-1V1a1 1 0 011-1z' fill='#FFAC08' />
        <path d='M9.88 0h6a1 1 0 011 1v22a1 1 0 01-1 1h-6V0z' fill='#1B1464' />
      </g>
      <defs>
        <clipPath id='prefix__clip0'>
          <path fill='#fff' transform='translate(.88)' d='M0 0h24v24H0z' />
        </clipPath>
      </defs>
    </svg>
  );
}

export default Feature1Icon;
