'use client';

import Image from 'next/image';
import { MousePointer2 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function TopBody() {
  const highlightedText = 'All-in-One';

  const smallCards = [
    { bgColor: '#FFFFFF', textColor: '#000000' },
    { bgColor: '#BEDC38', textColor: '#000000' },
    { bgColor: '#000000', textColor: '#FFFFFF' },
  ];

  const fadeSlideIn = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    
    <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-12">
      <div className="relative flex flex-col items-center mt-15">
        <div className="absolute top-10 left-4 hidden md:flex items-center select-none cursor-pointer space-x-2">
          <button className="text-white font-semibold text-sm bg-[#6B7280] rounded-full px-3 py-1">
            Ibrahim sheriff
          </button>
          <MousePointer2 className="w-5 h-5 text-[#6B7280] fill-current mt-8 rotate-180" />
        </div>

        <div className="absolute bottom-8 right-4 hidden md:flex items-center select-none cursor-pointer space-x-2">
          <MousePointer2 className="w-5 h-5 text-[#BEDC38] fill-current mb-7" />
          <button className="text-black font-semibold text-sm bg-[#BEDC38] rounded-full px-3 py-1">
            Ibrahim sheriff
          </button>
        </div>

        <div className="flex items-center gap-4 bg-white shadow-[0px_2px_6.6px_0px_rgba(0,0,0,0.25)] rounded-full px-4 py-2 max-w-full sm:max-w-[400px] z-10 mt-20">
          <span className="bg-[#BEDC38] text-black rounded-full px-2.5 py-1 flex items-center justify-center font-semibold text-[12px] select-none leading-none">
            New
          </span>
          <p className="font-inter font-semibold text-[13px] text-black whitespace-nowrap">
            Be perfectly organized with peejayy
          </p>
        </div>

        <div className="text-center mx-auto mt-8 px-4 max-w-full sm:max-w-[700px]">
          <h1 className="font-inter font-bold text-3xl sm:text-4xl md:text-[25px] tracking-normal text-black leading-tight lg:whitespace-nowrap">
            The{' '}
            <span className="inline-flex flex-wrap justify-center">
              {highlightedText.split('').map((char, idx) => (
                <span
                  key={idx}
                  className="text-[#BEDC38] px-1 rounded inline-block select-none"
                >
                  {char === ' ' ? '\u00A0' : char}
                </span>
              ))}
            </span>{' '}
            Task Documentation Tool to Organize
          </h1>
          <p className="mt-5 text-base text-[#6B7280] max-w-full sm:max-w-[600px] mx-auto">
            Lorem ipsum dolor sit amet consectetur. Ac iaculis in nullam etiam. At non cursus sed congue pharetra quis lobortis. Arcu aenean massa cursus purus elementum eget velit.
          </p>
        </div>

        <button className="px-6 py-3 rounded-full bg-[#BEDC38] text-black text-[13px] font-medium cursor-pointer hover:bg-gray-700 transition-colors mt-8 max-w-[180px] mx-auto">
          Start Free Trial
        </button>
      </div>

      <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] mt-20 max-w-full">
        <Image
          src="/assets/dashboard.png"
          alt="dashboard photo"
          fill
          style={{ objectFit: 'contain' }}
          priority
          className="max-w-full"
        />
        <div
          className="absolute bottom-0 left-0 w-full h-[217px]"
          style={{
            background:
              'linear-gradient(180deg, rgba(236, 236, 236, 0) 0%, #ECECEC 74.84%)',
            pointerEvents: 'none',
          }}
        />
      </div>

      <div className="w-full mt-24 flex flex-col gap-12">
        <div className="flex flex-col lg:flex-row gap-8 justify-between">
          <div className="flex flex-col gap-6 w-full lg:w-1/2">
            <h2 className="text-[30px] font-semibold text-black">About Peejay</h2>
            <div className="flex gap-4 flex-wrap">
              {smallCards.map((card, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeSlideIn}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  whileHover={{ scale: 1.05 }}
                  className="w-[94px] h-[64px] rounded-[10px] flex flex-col items-center justify-center font-bold text-sm"
                  style={{ backgroundColor: card.bgColor, color: card.textColor }}
                >
                  <div>2000</div>
                  <div className="text-xs font-normal text-[#6b7280]">active users</div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="w-full max-w-full lg:max-w-[700px] text-[#6B7280] text-[18px] font-medium leading-relaxed">
            <p>
              Lorem ipsum dolor sit amet consectetur. Ac iaculis in nullam etiam. Lorem ipsum dolor sit amet consectetur. Ac iaculis in nullam etiam. Lorem ipsum dolor sit amet consectetur. Ac iaculis in nullam etiam. Lorem ipsum dolor sit amet consectetur. Ac iaculis in nullam etiam. Lorem ipsum dolor sit amet consectetur. Ac iaculis in nullam etiam. Lorem ipsum dolor sit amet consectetur. Ac iaculis in nullam etiam.
            </p>
            <p className="mt-5">
              Lorem ipsum dolor sit amet consectetur. Ac iaculis in nullam etiam. Lorem ipsum dolor sit amet consectetur. Ac iaculis in nullam etiam. Lorem ipsum dolor sit amet consectetur. Ac iaculis in nullam etiam. Lorem ipsumd
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-8 w-full mt-10">
          <motion.div
            className="w-full max-w-[1212px] py-4 px-4 rounded-[20px] bg-white shadow-md mt-5 flex flex-col md:flex-row overflow-hidden mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeSlideIn}
            transition={{ duration: 0.6 }}
          >
            <div className="md:w-2/3 p-6 sm:p-8 flex flex-col justify-center relative">
              <div className="mb-3">
                <Image src="/assets/mission.svg" alt="mission icon" width={30} height={30} />
              </div>
              <h3 className="text-[25px] font-semibold  text-black mb-4">Our Mission</h3>
              <p className="text-base font-normal text-[#6B7280]">
                Lorem ipsum dolor sit amet consectetur. Ac iaculis in nullam etiam. Lorem ipsum dolor sit amet consectetur. Ac iaculis in nullam etiam. Lorem ipsum dolor sit amet consectetur. Ac iaculis in nullam etiam. Lorem ipsum dolor sit amet consectetur. Ac iaculis in nullam etiam. Lorem ipsum dolor sit amet consectetur. Ac iaculis in nullam etiam. Lorem ipsum dolor sit amet consectetur. Ac iaculis in nullam etiam.
              </p>
            </div>
            <div className="md:w-1/3  relative flex justify-center items-center">
              <Image
                src="/assets/Frame1.png"
                alt="Our Mission"
                width={350}
                height={240}
                className=" max-w-full max-h-[240px] my-auto"
              />
            </div>
          </motion.div>

          <motion.div
            className="w-full max-w-[1212px] rounded-[20px] bg-white shadow-md mt-4 flex flex-col md:flex-row px-4 py-4 overflow-hidden mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeSlideIn}
            transition={{ duration: 0.6 }}
          >
            <div className="md:w-1/3 relative order-last md:order-first flex justify-center items-center">
              <Image
                src="/assets/Frame2.png"
                alt="Our Vision"
                width={350}
                height={240}
                className="max-w-full max-h-[240px] my-auto"
              />
            </div>
            <div className="md:w-2/3 p-6 sm:p-8 flex flex-col  justify-center relative">
              <div className="mb-3 ">
                <Image src="/assets/sand.svg" alt="vision icon" width={30} height={30} />
              </div>
              <h3 className="text-[25px] font-semibold text-black mb-4">Our Vision</h3>
              <p className="text-base font-normal text-[#6B7280]">
                Lorem ipsum dolor sit amet consectetur. Ac iaculis in nullam etiam. Lorem ipsum dolor sit amet consectetur. Ac iaculis in nullam etiam. Lorem ipsum dolor sit amet consectetur. Ac iaculis in nullam etiam. Lorem ipsum dolor sit amet consectetur. Ac iaculis in nullam etiam. Lorem ipsum dolor sit amet consectetur. Ac iaculis in nullam etiam. Lorem ipsum dolor sit amet consectetur. Ac iaculis in nullam etiam.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
