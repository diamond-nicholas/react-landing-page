import React from 'react';

const FAQs = ({ faq, index, toggleFAQ }) => {
  return (
    <div
      onClick={() => toggleFAQ(index)}
      key={index}
      className={`faq cursor-pointer mb-4 p-4 bg-orange1 ${
        faq.open ? 'open' : ''
      }`}
    >
      <div className='faq-question relative text-2xl pr-20 mb-4 transition-all duration-300 ease-linear font-semibold xs:text-base xs:font-medium lg:font-bold lg:text-xl text-black'>
        {faq.question}
      </div>
      <div className='faq-answer opacity-0 max-h-0 overflow-y-hidden transition-all duration-300 ease-linear'>
        {faq.answer}
      </div>
    </div>
  );
};

export default FAQs;
