import React from 'react';

import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

import Feature1Icon from '../components/vectors/Feature1';
import PlusIcon from '../components/vectors/Plus';
import Feature2Icon from '../components/vectors/Feature2';
import Feature3Icon from '../components/vectors/Feature3';

import './Home.scss';

const features = [
  {
    icon: <Feature1Icon />,
    title: 'Projects creation',
    description:
      'An awesome feature that allow you to create projects within a workspace',
  },
  {
    icon: <Feature2Icon />,
    title: 'Task creation',
    description:
      'You can create various task under a project and add a deadline',
  },
  {
    icon: <Feature3Icon />,
    title: 'Time tracking',
    description:
      'You can track the productivity of your team and how time they spent on a task',
  },
];

const benefits = [
  {
    icon: <Feature1Icon />,
    title: 'Smooth Workflow',
    content:
      'Increase productivity with a simple to-do app. app for managing your personal budgets.',
  },
  {
    icon: <Feature1Icon />,
    title: 'Flexibility',
    content:
      'Increase productivity with a simple to-do app. app for managing your personal budgets.',
  },
  {
    icon: <Feature1Icon />,
    title: 'User Friendly',
    content:
      'Increase productivity with a simple to-do app. app for managing your personal budgets.',
  },
  {
    icon: <Feature1Icon />,
    title: 'Multiple Layouts',
    content:
      'Increase productivity with a simple to-do app. app for managing your personal budgets.',
  },
  {
    icon: <Feature1Icon />,
    title: 'Better Components',
    content:
      'Increase productivity with a simple to-do app. app for managing your personal budgets.',
  },
  {
    icon: <Feature1Icon />,
    title: 'Well Organized',
    content:
      'Increase productivity with a simple to-do app. app for managing your personal budgets.',
  },
];

const plans = [
  {
    amount: 0,
    date: 'month',
    planType: 'Business Class',
    type: 'For Individual or small teams ',
    packages: [
      'Drag & Drop Builder',
      '1000’s of Templates',
      'Blog Support Tools',
      'Watermarked',
    ],
  },
  {
    amount: 99,
    date: 'month',
    planType: 'Pro Master',
    type: 'For best oppotunities',
    packages: [
      'Drag & Drop Builder',
      '1000’s of Templates',
      'Blog Support Tools',
      'Watermarked',
    ],
    actions: 'or start 14days trial',
  },
];

const FAQs = [
  {
    icon: <PlusIcon />,
    text: 'App installation failed, how to update system information?',
  },
  {
    icon: <PlusIcon />,
    text: 'App response taking time, how to improve?',
  },
  {
    icon: <PlusIcon />,
    text: 'New update fixed all bug and issues',
  },
];

const HomePage = () => {
  return (
    <div className='HomePage'>
      <header className='h-screen header'>
        <NavBar />
        <div className='grid lg:grid-cols-2 px-10 xs:px-5 lg:px-48 mt-12'>
          <h2 className='leading-tight xs:text-3xl md:text-5xl md:leading-tight text-5xl mb-8 lg:text-7xl font-bold text-teal2 lg:max-w-lg lg:leading-tight'>
            Ultra-modern system of essential team collaboration
          </h2>
          <img src='/images/33333.png' alt='' className='lg:block' />
        </div>
      </header>

      <section id='features'>
        <div className='grid lg:grid-cols-2 xs:px-5 px-10 lg:px-48 mt-16 mb-11'>
          <img src='/images/11111.png' alt='' className='block mx-auto' />
          <div className='features'>
            <h2 className='text-4xl text-gray1 max-w-sm font-bold leading-tight'>
              Awesome App Features
            </h2>
            <p className='max-w-md text-gray2 text-xl mt-2'>
              Increase productivity with a simple to-do app. app for managing
              your personal budgets.
            </p>

            {features.map((feature, featureIdx) => (
              <div
                key={`feature_${featureIdx}`}
                className='lg:flex md:flex xs:grid-cols-1 xs:grid xs:place-items-center mt-16'
              >
                <div className='rounded-full h-20 w-20 bg-gray3 xs:mb-5 flex items-center justify-center'>
                  {feature.icon}
                </div>
                <div className='flex flex-col ml-4'>
                  <h2 className='text-teal2 font-bold text-2xl'>
                    {feature.title}
                  </h2>
                  <p className='text-gray2 text-xl max-w-md'>
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className='xs:hidden md:hidden mt-36 flex justify-between items-center px-10 lg:px-48 mb-11'>
          <h2 className='text-4xl text-black font-bold lg:pr-48 pt-12 leading-tight border-r-2 border-gray-400'>
            Smart jackpots that you <br /> may love this anytime & <br />{' '}
            anywhere
          </h2>
          <p className='max-w-xl text-xl text-gray1'>
            The rise of mobile devices transforms the way we consume information
            entirely and the world's most elevant channels such as Facebook.
          </p>
        </div>

        <div className='mt-20 flex flex-col justify-center lg:hidden items-center xs:px-5 px-10 mb-11'>
          <h2 className='md:text-4xl xs:text-3xl text-center text-black xs:font-semibold font-bold pt-12 mb-8 max-w-xl leading-tight'>
            Smart jackpots that you may love this anytime & anywhere
          </h2>
          <p className='max-w-xl text-xl text-gray1'>
            The rise of mobile devices transforms the way we consume information
            entirely and the world's most elevant channels such as Facebook.
          </p>
        </div>

        <div className='grid lg:grid-cols-2 xs:px-5 xs:mt-28 px-14 lg:px-48 md:gap-x-10 mt-44'>
          <img src='/images/Logos.jpg' alt='' className='block mx-auto' />
          <div className='flex flex-col md:mt-20 lg:mt-28'>
            <h2 className='text-4xl text-gray1 font-bold lg:max-w-sm leading-tight'>
              Designed & built by the latest code integration
            </h2>
            <p className='text-xl text-gray2 mt-5 max-w-lg'>
              Increase productivity with a simple to-do app. app for managing
              your personal projects. Increase productivity with a simple to-do
              app. app for managing your personal projects.
            </p>
          </div>
        </div>

        <div className='px-10 xs:px-5 lg:px-48 mb-11 mt-32'>
          <h2 className='text-center xs:font-semibold font-bold text-4xl max-w-md mx-auto leading-tight text-black'>
            Why you should choose our app
          </h2>
          <p className='lg:text-center text-xl text-gray1 max-w-3xl mx-auto mt-5'>
            The rise of mobile devices transforms the way we consume information
            entirely and the world's most elevant channels such as Facebook.
          </p>

          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-y-20 mt-20'>
            {benefits.map((benefit, benefitIdx) => (
              <div
                key={`benefitId_${benefitIdx}`}
                className='flex flex-col items-center justify-center'
              >
                <div className='rounded-full h-20 w-20 bg-gray3 flex items-center justify-center'>
                  {benefit.icon}
                </div>
                <h2 className='text-2xl mt-7 text-black text-center'>
                  {benefit.title}
                </h2>
                <p className='text-center text-xl text-gray2 mt-3 max-w-xs'>
                  {benefit.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id='pricing'
        className='px-10 xs:px-5 lg:px-48 mt-32 mb-11 border-b-2 border-gray-200 pb-36'
      >
        <h2 className='text-center font-bold text-4xl text-black'>
          Get the best with premium
        </h2>
        <p className='lg:text-center text-gray1 text-xl max-w-3xl mx-auto mt-7'>
          The rise of mobile devices transforms the way we consume information
          entirely and the world's most elevant channels such as Facebook.
        </p>

        <div className='grid gap-y-20 place-content-center sm:grid-cols-1 sm:place-items-center sm:gap-y-16 md:grid-cols-2 mt-20 max-w-2xl mx-auto gap-x-16'>
          {plans.map((plan, planIdx) => (
            <div key={`plan-type_${planIdx}`} className='card w-80 h-full'>
              <div className='card-header py-14 h-auto flex flex-col items-center justify-center'>
                <h2>
                  <span className='text-5xl font-bold text-teal2'>
                    ${plan.amount}
                  </span>{' '}
                  <sub className='text-xl text-gray2'>/ {plan.date}</sub>{' '}
                </h2>
                <h2 className='my-3 text-xl font-bold text-teal2'>
                  {plan.planType}
                </h2>
                <p className='text-black text-base'>{plan.type}</p>
              </div>
              {plan.packages.map((packag, packageIdx) => (
                <div
                  key={`package_${packageIdx}`}
                  className='card-body flex flex-col justify-center items-center my-4'
                >
                  <p className='text-xl text-black py-3'>{packag}</p>
                </div>
              ))}
              <button className='px-9 py-2 border-none bg-teal2 rounded-full text-white my-4 mb-8 flex justify-center items-center mx-auto'>
                Start free trial
              </button>
              <button
                className={`px-9 py-2 border-none text-black font-bold text-base mx-auto flex justify-center items-center ${
                  planIdx === 1 ? 'mb-6' : planIdx === 0 ? 'mb-0' : ''
                }`}
              >
                {plan.actions}
              </button>
            </div>
          ))}
        </div>
      </section>

      <section
        id='testimonials'
        className='lg:pr-48 grid lg:grid-cols-2 mt-20 xs:mt-14 lg:mt-32'
      >
        <img src='/images/image 5.jpg' alt='' />
        <div className='flex flex-col justify-center sm:pl-10 xs:pl-5 md:pl-10'>
          <h2 className='font-bold text-4xl text-black leading-tight max-w-md'>
            Meet Client Satisfaction by using our software
          </h2>
          <p className='text-xl text-gray1 max-w-xl my-5'>
            Increase productivity with a simple to-do app. app for managing your
            personal budgets.
          </p>
          <div className='flex'>
            <img src='/images/Vector.svg' alt='' className='mr-2' />
            <img src='/images/Vector.svg' alt='' className='mr-2' />
            <img src='/images/Vector.svg' alt='' className='mr-2' />
            <img src='/images/Vector.svg' alt='' className='mr-2' />
            <img src='/images/Vector.svg' alt='' />
          </div>
          <h2 className='text-3xl font-bold text-black my-4'>
            User friendly & Straightforward
          </h2>
          <p className='text-xl text-gray1 mb-9 max-w-xl leading-normal'>
            Increase productivity with a simple to-do app. app for managing your
            personal budgets.Increase productivity with a simple to-do app. app
            for managing your personal budgets.Increase productivity with a
            simple to-do app. app for managing your personal budgets.
          </p>
          <div className='flex'>
            <img src='/images/Ellipse 24.svg' alt='' />
            <div className='flex flex-col justify-center ml-4'>
              <h2 className='text-xl text-gray1 font-bold'>Babatunde Fatai</h2>
              <p className='text-xl text-gray1'>CEO of Primus Track</p>
            </div>
          </div>
        </div>
      </section>

      <section id='faq' className='mt-32 max-w-4xl mx-auto mb-11 xs:px-5 px-10'>
        <h2 className='text-center text-4xl font-bold text-black'>
          Frequently asked questions
        </h2>
        <p className='text-xl text-gray1 lg:text-center my-8 max-w-3xl mx-auto'>
          The rise of mobile devices transforms the way we consume information
          entirely and the world's most elevant channels such as Facebook.
        </p>
        <div className='flex flex-col bg-orange1 py-14 xs:px-5 px-10 mt-14'>
          <h2 className='text-xl xs:text-lg font-bold text-black mb-8'>
            How to create a workspace?
          </h2>
          <p className='text-base text-gray1 leading-relaxed'>
            The rise of mobile devices transforms the way we consume information
            entirely and the world's most elevant channels such as Facebook. The
            rise of mobile devices transforms the way we consume information
            entirely and the world's most elevant channels such as Facebook. The
            rise of mobile devices transforms the way
          </p>
        </div>
        {FAQs.map((faq, faqIdx) => (
          <div
            key={`faqs_${faqIdx}`}
            className='flex justify-between h-14 items-center bg-orange1 mt-5 px-5 lg:px-10 py-10'
          >
            <h2 className='font-semibold xs:text-base xs:font-medium lg:font-bold lg:text-xl text-black'>
              {faq.text}
            </h2>
            {faq.icon}
          </div>
        ))}
      </section>
      <Footer />
    </div>
  );
};

export default HomePage;
