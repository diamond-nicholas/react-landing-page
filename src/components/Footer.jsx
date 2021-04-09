import React from 'react'

import FacebookIcon from './vectors/FacebookIcon'
import LinkedInIcon from './vectors/LinkedInIcon'
import TwitterIcon from './vectors/TwitterIcon'

const Footer = () => {
  return (
    <footer className='flex lg:justify-between md:flex-row md:justify-between lg:flex-row xs:flex-col xs:justify-center items-center px-5 md:px-14 h-20 mt-32 bg-black1 lg:px-48'>
      <p className='text-base text-gray4 xs:mb-2'>
        &copy; {new Date().getFullYear()} Primus Track. All rights reserved
      </p>
      <div className='flex items-center'>
        <a href='https://instagram.com' target='_blank' rel='noreferrer'>
          <FacebookIcon className='mr-5' />
        </a>
        <a href='https://dribbble.com' target='_blank' rel='noreferrer'>
          <LinkedInIcon className='mr-5' />
        </a>
        <a
          href='https://twitter.com/PrimusTrack'
          target='_blank'
          rel='noreferrer'
        >
          <TwitterIcon />
        </a>
      </div>
    </footer>
  )
}

export default Footer
