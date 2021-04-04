import React from 'react';
import { NavLink } from 'react-router-dom';

import LogoIcon from '../components/vectors/Logo';

import './Home.scss';
import Feature1Icon from '../components/vectors/Feature1';

const linkClassNames = 'px-12 mx-1 font-normal text-teal';

const HomePage = () => {
  return (
    <div className='HomePage'>
      <header className='h-screen header'>
        <nav className='flex h-40 justify-between items-center px-48'>
          <NavLink to='/'>
            <LogoIcon />
          </NavLink>
          <div className='links'>
            <NavLink to='/' className={linkClassNames}>
              Home
            </NavLink>
            <NavLink to='/' className={linkClassNames}>
              Features
            </NavLink>
            <NavLink to='/' className={linkClassNames}>
              Pricing
            </NavLink>
            <NavLink to='/' className={linkClassNames}>
              FAQ
            </NavLink>
            <button className='signup'>Sign up</button>
            <button className='login'>Login</button>
          </div>
        </nav>

        <div className='flex justify-between px-48 mt-12'>
          <h2 className='mt-8 text-7xl text-teal2 max-w-lg leading-tight'>
            Ultra-modern system of essential team collaboration
          </h2>
          <img src='/images/Macbook.png' alt='' />
        </div>
      </header>

      <div className='grid grid-cols-2 px-48 mt-16 mb-11'>
        <img src='/images/iPhone 12 _ 12 Pro.svg' alt='' />
        <div className='features'>
          <h2 className='text-4xl text-gray1 max-w-sm font-bold leading-tight'>
            Awesome App Features
          </h2>
          <p className='max-w-md text-gray2 text-xl mt-2'>
            Increase productivity with a simple to-do app. app for managing your
            personal budgets.
          </p>
          <div className='flex mt-16'>
            <div className='rounded-full h-20 w-20 bg-gray3 flex items-center justify-center'>
              <Feature1Icon />
            </div>
            <div className='flex flex-col ml-4'>
              <h2 className='text-teal2 font-bold text-2xl'>
                Projects creation
              </h2>
              <p className='text-gray2 text-xl max-w-md'>
                An awesome feature that allow you to create projects within a
                workspace
              </p>
            </div>
          </div>

          <div className='flex mt-16'>
            <div className='rounded-full h-20 w-20 bg-gray3 flex items-center justify-center'>
              <Feature1Icon />
            </div>
            <div className='flex flex-col ml-4'>
              <h2 className='text-teal2 font-bold text-2xl'>
                Projects creation
              </h2>
              <p className='text-gray2 text-xl max-w-md'>
                An awesome feature that allow you to create projects within a
                workspace
              </p>
            </div>
          </div>

          <div className='flex mt-16'>
            <div className='rounded-full h-20 w-20 bg-gray3 flex items-center justify-center'>
              <Feature1Icon />
            </div>
            <div className='flex flex-col ml-4'>
              <h2 className='text-teal2 font-bold text-2xl'>
                Projects creation
              </h2>
              <p className='text-gray2 text-xl max-w-md'>
                An awesome feature that allow you to create projects within a
                workspace
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='mt-36 flex justify-between items-center px-48 mb-11'>
        <h2 className='text-4xl text-black font-bold pr-48 pt-12 leading-tight border-r-2 border-gray-400'>
          Smart jackpots that you <br /> may love this anytime & <br /> anywhere
        </h2>
        <p className='max-w-xl text-xl text-gray1'>
          The rise of mobile devices transforms the way we consume information
          entirely and the world's most elevant channels such as Facebook.
        </p>
      </div>

      <div className='grid grid-cols-2 px-48 mt-44'>
        <img src='/images/Logos.jpg' alt='' />
        <div className='flex flex-col mt-28'>
          <h2 className='text-4xl text-gray1 font-bold max-w-sm leading-tight'>
            Designed & built by the latest code integration
          </h2>
          <p className='text-xl text-gray2 mt-5 max-w-lg'>
            Increase productivity with a simple to-do app. app for managing your
            personal projects. Increase productivity with a simple to-do app.
            app for managing your personal projects.
          </p>
        </div>
      </div>

      <section className='px-48 mb-11 mt-32'>
        <h2 className='text-center font-bold text-4xl max-w-md mx-auto leading-tight text-black'>
          Why you should choose our app
        </h2>
        <p className='text-center text-xl text-gray1 max-w-3xl mx-auto mt-5'>
          The rise of mobile devices transforms the way we consume information
          entirely and the world's most elevant channels such as Facebook.
        </p>

        <div className='grid grid-cols-3 gap-y-20 mt-20'>
          <div className='flex flex-col items-center justify-center'>
            <div className='rounded-full h-20 w-20 bg-gray3 flex items-center justify-center'>
              <Feature1Icon />
            </div>
            <h2 className='text-2xl mt-7 text-black text-center'>
              Smooth Workflow
            </h2>
            <p className='text-center text-xl text-gray2 mt-3 max-w-xs'>
              Increase productivity with a simple to-do app. app for managing
              your personal budgets.
            </p>
          </div>

          <div className='flex flex-col items-center justify-center'>
            <div className='rounded-full h-20 w-20 bg-gray3 flex items-center justify-center'>
              <Feature1Icon />
            </div>
            <h2 className='text-2xl mt-7 text-black text-center'>
              Smooth Workflow
            </h2>
            <p className='text-center text-xl text-gray2 mt-3 max-w-xs'>
              Increase productivity with a simple to-do app. app for managing
              your personal budgets.
            </p>
          </div>

          <div className='flex flex-col items-center justify-center'>
            <div className='rounded-full h-20 w-20 bg-gray3 flex items-center justify-center'>
              <Feature1Icon />
            </div>
            <h2 className='text-2xl mt-7 text-black text-center'>
              Smooth Workflow
            </h2>
            <p className='text-center text-xl text-gray2 mt-3 max-w-xs'>
              Increase productivity with a simple to-do app. app for managing
              your personal budgets.
            </p>
          </div>

          <div className='flex flex-col items-center justify-center'>
            <div className='rounded-full h-20 w-20 bg-gray3 flex items-center justify-center'>
              <Feature1Icon />
            </div>
            <h2 className='text-2xl mt-7 text-black text-center'>
              Smooth Workflow
            </h2>
            <p className='text-center text-xl text-gray2 mt-3 max-w-xs'>
              Increase productivity with a simple to-do app. app for managing
              your personal budgets.
            </p>
          </div>

          <div className='flex flex-col items-center justify-center'>
            <div className='rounded-full h-20 w-20 bg-gray3 flex items-center justify-center'>
              <Feature1Icon />
            </div>
            <h2 className='text-2xl mt-7 text-black text-center'>
              Smooth Workflow
            </h2>
            <p className='text-center text-xl text-gray2 mt-3 max-w-xs'>
              Increase productivity with a simple to-do app. app for managing
              your personal budgets.
            </p>
          </div>

          <div className='flex flex-col items-center justify-center'>
            <div className='rounded-full h-20 w-20 bg-gray3 flex items-center justify-center'>
              <Feature1Icon />
            </div>
            <h2 className='text-2xl mt-7 text-black text-center'>
              Smooth Workflow
            </h2>
            <p className='text-center text-xl text-gray2 mt-3 max-w-xs'>
              Increase productivity with a simple to-do app. app for managing
              your personal budgets.
            </p>
          </div>
        </div>
      </section>

      <section className='px-48 mt-32 mb-11'>
        <h2 className='text-center font-bold text-4xl text-black'>
          Get the best with premium
        </h2>
        <p className='text-center text-gray1 text-xl max-w-3xl mx-auto mt-7'>
          The rise of mobile devices transforms the way we consume information
          entirely and the world's most elevant channels such as Facebook.
        </p>

        <div className='grid grid-cols-2 mt-20 max-w-2xl mx-auto gap-x-20'>
          <div className='card w-80 h-full'>
            <div className='card-header py-14 h-auto flex flex-col items-center justify-center'>
              <h2>
                <span className='text-5xl font-bold text-teal2'>$0</span>{' '}
                <sub className='text-xl text-gray2'>/ month</sub>{' '}
              </h2>
              <h2 className='my-3 text-xl font-bold text-teal2'>
                Business Class
              </h2>
              <p className='text-black text-base'>
                For Individual or small teams{' '}
              </p>
            </div>
            <div className='card-body flex flex-col justify-center items-center my-4'>
              <p className='text-xl text-black py-3'>Drag & Drop Builder</p>
              <p className='text-xl text-black py-3'>1000’s of Templates</p>
              <p className='text-xl text-black py-3'>Blog Support Tools</p>
              <p className='text-xl text-black py-3'>Watermarked</p>
              <button className='px-9 py-2 border-none bg-teal2 rounded-full text-white my-4'>
                Start free trial
              </button>
            </div>
          </div>

          <div className='card w-80 h-auto'>
            <div className='card-header py-14 h-auto flex flex-col items-center justify-center'>
              <h2>
                <span className='text-5xl font-bold text-teal2'>$99</span>{' '}
                <sub className='text-xl text-gray2'>/ month</sub>{' '}
              </h2>
              <h2 className='my-3 text-xl font-bold text-teal2'>Pro Master</h2>
              <p className='text-black text-base'>For best oppotunities </p>
            </div>
            <div className='card-body flex flex-col justify-center items-center my-4'>
              <p className='text-xl text-black py-3'>Drag & Drop Builder</p>
              <p className='text-xl text-black py-3'>1000’s of Templates</p>
              <p className='text-xl text-black py-3'>Blog Support Tools</p>
              <p className='text-xl text-black py-3'>Watermarked</p>
              <button className='px-9 py-2 border-none bg-teal2 rounded-full text-white my-4 text-base'>
                Start free trial
              </button>
              <button className='px-9 py-2 border-none text-black font-bold text-base'>
                or start 14days trial
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
