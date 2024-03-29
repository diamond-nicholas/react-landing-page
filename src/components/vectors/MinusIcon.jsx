import * as React from 'react';

function MinusIcon(props) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='prefix__h-5 prefix__w-5'
      viewBox='0 0 20 20'
      fill='currentColor'
      width='2em'
      height='2em'
      {...props}
    >
      <path
        fillRule='evenodd'
        d='M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
        clipRule='evenodd'
      />
    </svg>
  );
}

export default MinusIcon;
