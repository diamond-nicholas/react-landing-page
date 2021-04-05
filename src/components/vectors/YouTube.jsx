import * as React from 'react';

function YouTuebIcon(props) {
  return (
    <svg
      width='2em'
      height='2em'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        opacity={0.1}
        fillRule='evenodd'
        clipRule='evenodd'
        d='M0 12C0 5.373 5.373 0 12 0s12 5.373 12 12-5.373 12-12 12S0 18.627 0 12z'
        fill='#fff'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M17 7.875c.552.15.985.596 1.133 1.162.267 1.025.267 3.163.267 3.163s0 2.139-.267 3.164A1.625 1.625 0 0117 16.526C16.003 16.8 12 16.8 12 16.8s-4.003 0-5-.274a1.625 1.625 0 01-1.133-1.162C5.6 14.338 5.6 12.2 5.6 12.2s0-2.138.267-3.163C6.015 8.47 6.448 8.026 7 7.875 7.997 7.6 12 7.6 12 7.6s4.003 0 5 .275zM10.8 10.4v4l3.2-2-3.2-2z'
        fill='#fff'
      />
    </svg>
  );
}

export default YouTuebIcon;
