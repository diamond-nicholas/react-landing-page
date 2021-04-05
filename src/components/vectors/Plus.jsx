import * as React from 'react';

function PlusIcon(props) {
  return (
    <svg
      width='1em'
      height='1em'
      viewBox='0 0 15 15'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M8.438 6.563V0H6.562v6.563H0v1.875h6.563V15h1.875V8.437H15V6.563H8.437z'
        fill='#000'
      />
    </svg>
  );
}

export default PlusIcon;
