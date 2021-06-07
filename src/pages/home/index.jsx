import React, { useState } from 'react'

import FAQs from '../../components/FAQs/FAQs'
import NavBar from '../../components/NavBar'
import Footer from '../../components/Footer'

import Feature1Icon from '../../components/vectors/Feature1'
import Feature2Icon from '../../components/vectors/Feature2'
import Feature3Icon from '../../components/vectors/Feature3'

import './Home.scss'

const features = [
  {
    image: <img src='/images/primus_1.jpeg' />,
    icon: <Feature1Icon />,
    title: 'Create Projects',
    description:
      'Create projects, assign a team lead, add collaborators, attachments, and leave comments. For projects that are on a time crunch, you can set an appropriate priority level.'
  },
  {
    image: <img src='/images/primus2.jpeg' />,
    icon: <Feature2Icon />,
    title: 'Create Tasks',
    description:
      'Tasks are sub-components of projects. Just like projects, you can assign a team lead, add collaborators and set a priority level for a specific task.'
  },
  {
    image: <img src='/images/primus_3.jpeg' />,
    icon: <Feature3Icon />,
    title: 'Minimal Dashboard',
    description:
      'Get a quick overview of how you’re keeping up with your projects and tasks via our simple-to-use and clutter-free dashboard.'
  }
]

// const benefits = [
//   {
//     icon: <Feature1Icon />,
//     title: 'Smooth Workflow',
//     content:
//       'Increase productivity with a simple to-do app. app for managing your personal budgets.'
//   },
//   {
//     icon: <Feature1Icon />,
//     title: 'Flexibility',
//     content:
//       'Increase productivity with a simple to-do app. app for managing your personal budgets.'
//   },
//   {
//     icon: <Feature1Icon />,
//     title: 'User Friendly',
//     content:
//       'Increase productivity with a simple to-do app. app for managing your personal budgets.'
//   },
//   {
//     icon: <Feature1Icon />,
//     title: 'Multiple Layouts',
//     content:
//       'Increase productivity with a simple to-do app. app for managing your personal budgets.'
//   },
//   {
//     icon: <Feature1Icon />,
//     title: 'Better Components',
//     content:
//       'Increase productivity with a simple to-do app. app for managing your personal budgets.'
//   },
//   {
//     icon: <Feature1Icon />,
//     title: 'Well Organized',
//     content:
//       'Increase productivity with a simple to-do app. app for managing your personal budgets.'
//   }
// ]

const plans = [
  {
    amount: 0,
    date: 'month',
    planType: 'Free',
    type: '',
    packages: [
      '1 workspace',
      '5 projects',
      '50 tasks',
      '1k messages',
      '1000 activity log',
      '50 file storage',
      '10 collaborators',
      'Limited Calendar and Calendar feature',
    ]
  },
  {
    amount: 8.99,
    date: 'month',
    planType: 'Basic',
    type: 'For Small Teams',
    packages: [
      '20 workspaces',
      '250 projects',
      '1k tasks',
      'unlimited messages',
      'unlimited activity log',
      '10GB file storage',
      'Collaborate with up to 300 teammates',
      'Full Calendar and timer feature',
      'Private/public project access control'
    ],
    // actions: 'or start 14days trial'
  },
  {
    amount: 18.99,
    date: 'month',
    planType: 'Premium',
    type: 'For Large Teams',
    packages: [
      'Unlimited tasks',
      'Unlimited projects',
      'Unlimited messages',
      'Unlimited activity log',
      'Unlimited file storage (100MB)',
      'Collaborate with up to 1k teammates',
      'List view projects',
      'Board view projects',
      'Full Calendar view',
      'Private/public project Access',
      'Full timer Access'
    ],
    // actions: 'or start 14days trial'
  }
]

const HomePage = () => {
  const [faqs, setFaqs] = useState([
    {
      question: 'What is PrimusTrack?',
      answer:
        "Primus Track is a minimal, easy-to-use project management tool that helps you to achieve your best work without being distracted. It simply provides the necessary features you need without overwhelming you with gimmicky features",
      open: false
    },
    {
      question: 'Does Primus Track integrate with other products?',
      answer:
        "Yes. Primus Track integrates well with other third-party apps you might need. At the moment, we offer full support for Google Meet and Slack.",
      open: false
    },
    {
      question: 'How does the Free pricing plan work?',
      answer:
        "The Free tier of Primus Track offers you limited features needed for project management and team collaboration. If the Free pricing plan isn’t enough for your needs, you can opt-in for our Basic or Premium options.",
      open: false
    },
    {
      question: 'Do I need the Basic and Premium paid plans?',
      answer:
        'Maybe. Primus Track offers three pricing plans which are billed annually, based on a team’s size. ‘Free’ is geared towards startups, ‘Basic’ towards small teams, and ‘Premium’ for large teams. Depending on your team size and the size of projects you want to manage, choose which of the three plans would be sufficient. We recommend the Basic plan for 1st time customers.',
      open: false
    },
    {
      question: 'Can I switch plans later?',
      answer:
        'Sure, why not? Primus Track is a pay-as-you-go tool to help you pay for the right plan based on your needs. Depending on the scale of your projects, you can either choose to downgrade/upgrade.',
      open: false
    },
    {
      question: 'What happens when my subscription expires?',
      answer:
        'Our premium subscription is billed annually. You will receive a renewal notification via your email 7 days before your subscription expires. If you do not choose to renew, or if your subscription expires, your account would be downgraded to our Free limited version.',
      open: false
    }
  ])

  const toggleFAQ = index => {
    setFaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open
        } else {
          faq.open = false
        }

        return faq
      })
    )
  }

  return (
    <div className='HomePage'>
      <header className='h-screen header'>
        <NavBar />
        <div className='grid lg:grid-cols-2 px-10 xs:px-5 lg:px-48 mt-12'>
          <div>
          <h2 className='leading-tight xs:text-3xl md:text-5xl md:leading-tight text-5xl mb-8 lg:text-5xl font-bold text-teal2 lg:max-w-lg lg:leading-tight'>
            Build Excellent Stuff, All Without the Clutter
          </h2>
          <p className='leading-tight font-bold text-teal2'>
            We know building great stuff requires focus and clarity. PrimusTrack aids you to do just that in a simple-to-use and cost-effective way.</p>
            <button className='px-9 py-2 border-none bg-teal2 rounded-full text-white my-4 mb-8'>
                Start free trial
              </button>
          </div>
          
          <img src='/images/33333.png' alt='' className='lg:block' />
        </div>
      </header>

      <section id='features'>
        <div className='xs:px-5 px-10 lg:px-20 mt-16 mb-11'>
          <div className='features'>
            <h2 className='text-4xl text-gray1 max-w-sm font-bold leading-tight ml-100'>
              Features
            </h2>
            <p className='max-w-md text-gray2 text-xl mt-2'>
              PrimusTrack is a simple but powerful tool that offers you the necessary features to achieve effective collaboration.
            </p>

            {features.map((feature, featureIdx) => (
              <div
                key={`feature_${featureIdx}`}
                className='lg:flex md:flex xs:grid-cols-1 xs:grid xs:place-items-center mt-16'
              >
                <div className='w-1/4 h-1/4 m-20'>
                  {feature.image}
                </div>
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
              Your Swiss-Army Knife
            </h2>
            <p className='text-xl text-gray2 mt-5 max-w-lg'>
              Perform all your necessary team activities without distractions. We integrate seamlessly with your favourite office tools. Yes! We also support your favourite G Suite apps.
            </p>
          </div>
        </div>

        {/* <div className='px-10 xs:px-5 lg:px-48 mb-11 mt-32'>
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
        </div> */}
      </section>

      <section
        id='pricing'
        className='px-10 xs:px-5 lg:px-48 mt-32 mb-11 border-b-2 border-gray-200 pb-36'
      >
        <h2 className='text-center font-bold text-4xl text-black'>
          Access the full power of Primus Track with Premium
        </h2>
        <p className='lg:text-center text-gray1 text-xl max-w-3xl mx-auto mt-7'>
          Billed annually, Cancel anytime.
        </p>

        <div className='grid gap-y-20 place-content-center sm:grid-cols-1 sm:place-items-center sm:gap-y-16 md:grid-cols-2 lg:grid-cols-3 mt-20 max-w-6xl mx-auto gap-x-10'>
          {plans.map((plan, planIdx) => (
            <div key={`plan-type_${planIdx}`} className='card h-full'>
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
                  className='card-body flex flex-col justify-center items-center my-2 px-10'
                >
                  <p className='text-xl text-black text-center py-2'>
                    {packag}
                  </p>
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
                {/* {plan.actions} */}
              </button>
            </div>
          ))}
        </div>
      </section>
{/* 
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
      </section> */}

      <section id='faq' className='mt-32 max-w-4xl mx-auto mb-11 xs:px-5 px-10'>
        <h2 className='text-center text-4xl font-bold text-black'>
          Frequently asked questions
        </h2>
        <p className='text-xl text-gray1 lg:text-center my-8 max-w-3xl mx-auto'>
          The rise of mobile devices transforms the way we consume information
          entirely and the world's most elevant channels such as Facebook.
        </p>
        {/* <div className='flex flex-col bg-orange1 py-14 xs:px-5 px-10 mt-14'>
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
        </div> */}
        <div className='faqs w-full py-4'>
          {faqs.map((faq, i) => (
            <FAQs faq={faq} index={i} toggleFAQ={toggleFAQ} />
          ))}
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default HomePage
