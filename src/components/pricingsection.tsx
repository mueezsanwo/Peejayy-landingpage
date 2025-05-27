'use client';

import React from 'react';
import { motion } from 'framer-motion';

const checkIcon = (
  <svg
    className="w-5 h-5 text-green-500 inline-block mr-2 flex-shrink-0"
    fill="none"
    stroke="currentColor"
    strokeWidth={3}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

const pricingData = [
  {
    tier: 'Basic',
    price: '$0',
    list: ['Limited Projects', '1 user', 'Basic task management'],
    innerBg: '#ececec', 
    desc: 'Perfect for a starter',
    buttonBg: '#000',          
    buttonTextColor: '#fff', 
  },
  {
    tier: 'Premiun',
    price: '$200',
    list: ['Everything in basic', 'Team collaboration', 'Reporting tools', 'Everything in basic', 'Reporting tools'],
    innerBg: 'linear-gradient(97.57deg, #ECECEC -13.27%, rgba(190, 220, 56, 0.6) 121.31%)',
    desc: 'Perfect for a starter',
    buttonBg: '#bedc38',          
    buttonTextColor: '#000', 
  },
  {
    tier: 'Custom',
    price: '$300',
    list: ['Tailored for teams', 'Unlimited users', 'Custom workflows', 'Unlimited users', 'Custom workflows'],
    innerBg: 'linear-gradient(97.72deg, #ECECEC -17.06%, #868686 211.32%)',
    desc: 'Perfect for a starter',
    buttonBg: '#fff',          
    buttonTextColor: '#000', 
    buttonShadow: '0px 2px 10px 0px #0000001F',
  },
];

export default function PricingSection() {
  return (
    <section className="w-full mx-auto px-4 sm:px-8 py-20 text-center bg-[#ececec]">
      
      <button
        disabled
        className="bg-[#BEDC38] text-black font-medium px-6 py-2 rounded-[10px] text-[13px] mb-4 cursor-default inline-block"
      >
        Pricing
      </button>
      
         <h2 className="text-[30px] font-semibold text-black mb-2 ml-2 sm:ml-5 text-center">What we offer our users</h2>
             <p className="text-[#6b7280] font-medium mb-12  ml-2 sm:ml-5 text-center ">
            Lorem ipsum dolor sit amet consectetur. Ac iaculis in nullam etiam. At non cursus
          </p>
      {/* Cards container */}
      <div className="flex flex-wrap justify-center gap-8 max-w-[1280px] mx-auto">
        {pricingData.map(
          (
            {
              tier,
              price,
              list,
              innerBg,
              desc,
              buttonBg,
              buttonTextColor,
              buttonShadow,
            },
            i
          ) => (
            <motion.div
              key={tier}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="bg-white rounded-[30px] shadow-md flex flex-col
                         w-full
                         sm:w-[48%]
                         lg:w-[330px]"
              style={{ height: 462 }}
            >
              
              <ul className="flex-1 p-3 space-y-4 text-left text-black ml-2 font-medium text-[13px]">
                {list.map((item, idx) => (
                  <li key={idx} className="flex items-center text-black">
                    {React.cloneElement(checkIcon, {
                      className: 'text-black w-[16px] h-[16px] mr-1',
                    })}
                    {item}
                  </li>
                ))}
              </ul>

              {/* Bottom inner card */}
              <div
                className="mx-auto rounded-t-[40px] rounded-b-[30px] px-6 pt-6 pb-8 flex flex-col bg-white w-full max-h-[233px]"
                style={{ boxShadow: '0px -1px 50px 0px #00000026' }}
              >
                {/* Smaller tier+price card */}
                <div
                  className="rounded-[16px] w-full max-h-[107px] flex flex-col gap-6 justify-start items-start bg-[#ececec]"
                  style={{ background: innerBg }}
                >
                  <h3 className="text-[10px] px-4 py-1 bg-white border-white rounded-[100px] ml-2 mt-2">{tier}</h3>
                  <p className="text-[20px] font-bold text-black ml-2 mb-2">
                    {price}
                    <span className="text-base text-[#6b7280]">/month</span>
                  </p>
                </div>

                
                <p className="text-[#6b7280] text-[13px] font-normal text-left mt-3">{desc}</p>

                
                <button
                  className="font-medium rounded-[100px] text-[13px] px-8 py-3 mt-3 hover:bg-green-700 transition"
                  type="button"
                  style={{
                    backgroundColor: buttonBg,
                    color: buttonTextColor,
                    boxShadow: buttonShadow,
                  }}
                >
                  Get Started
                </button>
              </div>
            </motion.div>
          )
        )}
      </div>
    </section>
  );
}
