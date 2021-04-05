import * as React from 'react';

function TwitterIcon(props) {
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
        d='M11.64 9.754l.026.415-.42-.05c-1.528-.196-2.862-.857-3.995-1.967l-.554-.55-.143.406c-.302.907-.11 1.864.52 2.508.336.356.26.407-.319.195-.201-.068-.377-.118-.394-.093-.059.06.143.83.302 1.136.218.423.663.838 1.15 1.084l.411.195-.486.009c-.47 0-.487.008-.437.186.168.55.831 1.136 1.57 1.39l.52.178-.453.27c-.672.39-1.46.611-2.25.628-.377.008-.688.042-.688.068 0 .085 1.024.56 1.62.745 1.788.551 3.911.314 5.506-.627 1.133-.669 2.267-2 2.795-3.288.286-.686.571-1.94.571-2.542 0-.39.025-.44.495-.906.277-.272.538-.568.588-.653.084-.16.076-.16-.353-.017-.713.254-.814.22-.461-.16.26-.272.57-.764.57-.908 0-.025-.125.017-.268.094a4.685 4.685 0 01-.739.288l-.453.144-.411-.28c-.227-.152-.546-.322-.714-.373-.428-.118-1.082-.101-1.469.034-1.049.382-1.712 1.365-1.636 2.44z'
        fill='#fff'
      />
    </svg>
  );
}

export default TwitterIcon;
