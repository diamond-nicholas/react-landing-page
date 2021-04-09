import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import NavModal from './NavModal/NavModal';

import LogoIcon from './vectors/Logo';
import Menu from './vectors/Menu';

const NavBar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const links = [
    {
      text: 'Home',
      path: '/#',
      page: false,
    },
    {
      text: 'Features',
      path: '#features',
      page: false,
    },
    {
      text: 'Blog',
      path: '/blog',
      page: true,
    },
    {
      text: 'Pricing',
      path: '#pricing',
      page: false,
    },
    {
      text: 'FAQ',
      path: '#faq',
      page: false,
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
          <>
            {link.page === false ? (
              <a
                href={link.path}
                key={`nav-link_${linkIndex}`}
                to={link.path}
                className='hidden lg:inline-block px-10 mx-1 font-normal text-teal'
              >
                {link.text}
              </a>
            ) : (
              <NavLink
                className='hidden lg:inline-block px-10 mx-1 font-normal text-teal'
                activeClassName='font-bold'
                to={link.path}
              >
                {link.text}
              </NavLink>
            )}
          </>
        ))}
        <NavLink
          to='/'
          className='hidden lg:inline-block border-2 border-solid border-teal px-10 py-2 focus:outline-none rounded-full text-teal bg-transparent mr-4'
        >
          Sign up
        </NavLink>
        <NavLink
          to='/'
          className='hidden lg:inline-block px-12 py-3 border-none bg-teal rounded-full text-white'
        >
          Login
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
