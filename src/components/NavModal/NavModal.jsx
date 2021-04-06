import React from 'react';
import { NavLink } from 'react-router-dom';
import CloseIcon from '../vectors/CloseIcon';

const NavModal = ({ setIsModalOpen }) => {
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
    <div className='fixed top-0 left-0 right-0 bottom-0 z-10'>
      <div className='absolute top-0 left-0 right-0 bottom-0 rounded-none overflow-hidden bg-white max-w-full p-6 outline-none border-none'>
        <div className='flex justify-between'>
          <div className='flex flex-col justify-center'>
            {links.map((link, navmodalIdx) => (
              <NavLink
                key={`navmodal-link_${navmodalIdx}`}
                to={link.path}
                className='font-normal text-teal py-3 text-lg'
              >
                {link.text}
              </NavLink>
            ))}
            <button className='border-2 border-teal rounded-full py-2 px-10 bg-transparent mb-4'>
              Sign Up
            </button>
            <button className='py-2 px-10 border-none bg-teal text-white rounded-full'>
              Login
            </button>
          </div>
          <div onClick={() => setIsModalOpen(false)}>
            <CloseIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavModal;
