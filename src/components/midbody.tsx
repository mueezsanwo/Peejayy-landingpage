'use client';

import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

interface Card {
  title: string;
  text: string;
  imgSrc: string;
  imgAlt: string;
  extraText?: string;
}

interface FeatureCard {
  title: string;
  subtext: string;
  imgSrc: string;
  imgAlt: string;
}

export default function MidBody() {
  const cards: Card[] = [
    {
      title: 'Efficiency',
      text: 'Lorem ipsum dolor sit amet consectetur. Ac iaculis in nullam etiam. At non cursus in nullam etiam. At non cursu',
      imgSrc: '/assets/pie.svg',
      imgAlt: 'Half Pie Image',
      extraText: '80% Accuracy',
    },
    {
      title: 'Straight Remainder',
      text: 'Lorem ipsum dolor sit amet consectetur. Ac iaculis in nullam etiam. At non cursus in nullam etiam. At non cursu',
      imgSrc: '/assets/calendar.png',
      imgAlt: 'Calendar',
    },
    {
      title: 'Organising',
      text: 'Lorem ipsum dolor sit amet consectetur. Ac iaculis in nullam etiam. At non cursus in nullam etiam. At non cursu',
      imgSrc: '/assets/note.png',
      imgAlt: 'note Image',
    },
  ];

  const features: FeatureCard[] = [
    {
      title: 'Smart Scheduling',
      subtext: 'Lorem ipsum dolor sit amet consectetur. Ac iaculis in nullam etiam. ',
      imgSrc: '/assets/Group44.png',
      imgAlt: 'Calendar',
    },
    {
      title: 'Reminders',
      subtext: 'Lorem ipsum dolor sit amet consectetur. Ac iaculis in nullam etiam. ',
      imgSrc: '/assets/Group45.png',
      imgAlt: 'Reminder',
    },
    {
      title: 'Collaboration',
      subtext: 'Lorem ipsum dolor sit amet consectetur. Ac iaculis in nullam etiam. ',
      imgSrc: '/assets/Group46.png',
      imgAlt: 'Collaboration',
    },
  ];

  return (
    <div
      className="bg-white pt-24 pb-12 px-6 sm:px-8 mt-25"
      style={{ borderTopLeftRadius: '100px', borderTopRightRadius: '100px' }}
    >
      {/* Top Rounded Section */}
      <div>
        <div className="max-w-7xl mx-auto text-center px-4 sm:px-0">
          <button
            className="bg-[#BEDC38] text-black font-medium px-5 py-1 rounded-[10px] text-[13px] mb-4 cursor-default"
            disabled
          >
            Solutions
          </button>
          <p className="text-[30px] font-semibold text-black mb-2">Bringing comfort at inconvenient times</p>
          <p className="text-[#6b7280] max-w-xl font-medium mx-auto mb-12">
            Lorem ipsum dolor sit amet consectetur. Ac iaculis in nullam etiam. At non cursus
          </p>
          <div className="flex justify-center gap-6 flex-wrap mt-10">
            {cards.map(({ title, text, imgSrc, imgAlt, extraText }, i) => (
              <motion.div
                key={i}
                className="bg-[#ECECEC] rounded-[15px] p-6 flex flex-col items-center max-w-full sm:max-w-[394px]"
                style={{
                  height: extraText ? 'auto' : 303,
                  width: '100%',
                  maxWidth: 394,
                }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
              >
                <h3 className="font-semibold text-xl mb-2 text-left text-black w-full">{title}</h3>
                <p className="text-[#6b7280] font-medium text-left mb-4 w-full">{text}</p>
                <div className="relative w-full h-[130px]">
                  <Image
                    src={imgSrc}
                    alt={imgAlt}
                    fill
                    style={{ objectFit: 'contain' }}
                    sizes="(max-width: 768px) 100vw, 394px"
                  />
                </div>
                {extraText && (
                  <p className="text-black text-base -mt-14 text-center max-w-[150px]">
                    80% <br /> Accuracy
                  </p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Feature Section */}
      <div className="mt-24 px-2 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <button
            className="bg-[#BEDC38] text-black font-medium px-5 ml-2 sm:ml-5 py-1 rounded-[10px] text-[13px] mb-4 cursor-default"
            disabled
          >
            Feature
          </button>
          <h2 className="text-[30px] font-semibold text-black mb-2 ml-2 sm:ml-5 text-left">Why use Peejayy for organizing of task</h2>
          <p className="text-[#6b7280] font-medium mb-12 max-w-2xl ml-2 sm:ml-5 text-left">
            Lorem ipsum dolor sit amet consectetur. Ac iaculis in nullam etiam. At non cursus
          </p>

          <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
            {features.map(({ title, subtext, imgSrc, imgAlt }, i) => (
              <motion.div
                key={i}
                className="bg-[#ECECEC] rounded-[15px] p-6 flex flex-col items-start relative max-w-full sm:max-w-[394px]"
                style={{ height: 351, width: '100%', maxWidth: 394 }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
              >
                <div className="relative w-full h-[199px] mt-2">
                  <Image
                    src={imgSrc}
                    alt={imgAlt}
                    fill
                    style={{ objectFit: 'contain' }}
                    sizes="(max-width: 768px) 100vw, 394px"
                  />
                  <div
                    className="absolute bottom-0 left-1/2 -translate-x-1/2"
                    style={{
                      width: 300,
                      height: 49,
                      background:
                        'linear-gradient(0deg, #ECECEC 0%, rgba(236, 236, 236, 0) 135%)',
                    }}
                  />
                </div>
                <h3 className="font-semibold text-base text-black mt-2">{title}</h3>
                <p className="text-[#6b7280] text-base font-normal mt-3">{subtext}</p>
              </motion.div>
            ))}
          </div>

          {/* Additional Two Cards Section */}
          <div className="flex flex-wrap justify-center gap-11 mt-16">
            {/* First Card */}
            <motion.div
              className="bg-[#ECECEC] rounded-[15px] p-6 relative flex flex-col justify-between max-w-full sm:max-w-[596px]"
              style={{ height: 351, width: '100%', maxWidth: 596 }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative w-full sm:w-[550px] h-[364px] rounded-[15px] overflow-hidden z-0 bg-[#ECECEC] mx-auto sm:mx-0">
                {/* Internal Grid Lines */}
                <div
                  className="absolute inset-0 z-0 pointer-events-none"
                  style={{
                    backgroundImage: `
                      repeating-linear-gradient(to right, transparent, transparent 110px, #d1d5db 110px, #d1d5db 111px),
                      repeating-linear-gradient(to bottom, transparent, transparent 120px, #d1d5db 120px, #d1d5db 121px)
                    `,
                    backgroundSize: '100% 100%',
                  }}
                />

                {/* Overlay to sink the bottom part */}
                <div
                  className="absolute bottom-0 left-0 w-full h-[100px] z-10 pointer-events-none"
                  style={{
                    background:
                      'linear-gradient(to bottom, rgba(236,236,236,0) 0%, #ECECEC 100%)',
                  }}
                />

                {/* Pills */}
                <div className="relative z-20 flex flex-col justify-center items-center gap-4 p-6 h-full">
                  <div className="bg-white px-4 py-1 rounded-full text-sm font-medium w-fit">
                    Project Management
                  </div>
                  <div className="bg-white px-4 py-1 rounded-full text-sm font-medium w-fit">
                    Freelancers
                  </div>
                  <div className="bg-white px-4 py-1 rounded-full text-sm font-medium w-fit">
                    Project Management
                  </div>
                </div>
              </div>

              <p className="text-black text-base font-semibold mt-8 z-10 relative">
                Performance Tracking
              </p>
              <p className="text-[#6b7280] text-base font-normal mb-2">
                Lorem ipsum dolor sit amet consectetur.Ac iaculis in nullam etiam.Lorem ipsum dolor sit amet consectetur. Ac iaculis in nullam etiam.{' '}
              </p>
            </motion.div>

            {/* Second Card */}
            <motion.div
              className="bg-[#ECECEC] rounded-[15px] p-6 flex flex-col justify-between max-w-full sm:max-w-[596px]"
              style={{ height: 351, width: '100%', maxWidth: 596 }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="text-base font-semibold text-black ">Performance Tracking</h3>
              <p className="text-[#6b7280] text-base font-normal mb-2">
                Lorem ipsum dolor sit amet consectetur.Ac iaculis in nullam etiam.Lorem ipsum dolor sit amet consectetur. Ac iaculis in nullam etiam.{' '}
              </p>
              <div className="flex justify-center mt-auto mb-5 gap-4">
                {['/assets/white.png', '/assets/yellow.png', '/assets/black.png'].map((src, idx) => (
                  <div key={idx} className="relative w-[100px] h-[100px] sm:w-[140px] sm:h-[140px]">
                    <Image
                      src={src}
                      alt={`Timeline image ${idx + 1}`}
                      fill
                      style={{ objectFit: 'contain' }}
                      sizes="(max-width: 768px) 100vw, 160px"
                    />
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
