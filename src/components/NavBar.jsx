import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import NavModal from './NavModal/NavModal';

import LogoIcon from './vectors/Logo';
import Menu from './vectors/Menu';

// const linkClassNames = 'md:hidden sm:hidden px-12 mx-1 font-normal text-teal';

const NavBar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const links = [
    {
      text: 'Home',
      path: '/',
    },
    {
      text: 'Features',
      path: '/features',
    },
    {
      text: 'Pricing',
      path: '/pricing',
    },
    {
      text: 'FAQ',
      path: '/faq',
    },
  ];

  return (
    <nav className='px-10 xs:px-5 flex h-40 justify-between items-center lg:px-48'>
      {isModalOpen && <NavModal setIsModalOpen={setIsModalOpen} />}
      <NavLink to='/'>
        <LogoIcon />
      </NavLink>
      <span className='flex-grow' />
      {isModalOpen === false && (
        <div onClick={() => setIsModalOpen(true)}>
          <Menu className='lg:hidden' />
        </div>
      )}

      <div className='links'>
        {links.map((link, linkIndex) => (
          <NavLink
            key={`nav-link_${linkIndex}`}
            to={link.path}
            className='hidden lg:inline-block px-12 mx-1 font-normal text-teal'
            activeClassName='font-bold'
          >
            {link.text}
          </NavLink>
        ))}
        <button className='hidden lg:inline-block signup'>Sign up</button>
        <button className='hidden lg:inline-block login'>Login</button>
      </div>
    </nav>
  );
};

export default NavBar;
