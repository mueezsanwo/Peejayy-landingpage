'use client';

import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const cardData = [
  'What is Peejayy all about?',
  'How does peejayy standout from others?',
  'What is the possibility we won’t have dash?',
  'Is Peejayy staying longer?',
  'How secure is Peejayy?',
  'What support do we get?',
];

// Animation variant for cards
const cardVariant = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: 'easeOut',
    },
  }),
};

// Animation variant for PEEJAY text
const peejayVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: 'easeOut' },
  },
};

export default function BottomBody() {
  return (
    <div className="bg-white w-full px-10 py-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-20">
        {/* LEFT SIDE */}
        <div className="flex-1 flex flex-col justify-center">
          <button
            disabled
            className="bg-[#BEDC38] max-w-[90px] text-white font-medium px-2 py-1 rounded-[10px] text-[13px] mb-4 cursor-default inline-block"
          >
            Features
          </button>
          <h3 className="text-[30px] text-black font-semibold mb-2 max-w-[482px]">
            Why use Peejay for organizing of tasks
          </h3>
          <p className="text-[#6b7280] text-base mb-6 max-w-[447px]">
            Lorem ipsum dolor sit amet consectetur. Ac iaculis in nullam etiam. At non cursus
          </p>
          <button className="max-w-[121px] px-2 py-2 rounded-full bg-[#BEDC38] text-white text-[13px] font-medium cursor-pointer hover:bg-gray-700 transition-colors mt-8">
            Start Free Trial
          </button>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex-1 flex flex-col gap-4">
          {cardData.map((text, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              animate="visible"
              variants={cardVariant}
              className="max-w-[616px] h-[50px] bg-[#ECECEC] rounded-[10px] flex items-center justify-between px-4 text-black shadow-sm"
            >
              <span className="text-[14px] font-semibold">{text}</span>
              <ChevronDown size={20} className="text-black" />
            </motion.div>
          ))}
        </div>
      </div>

      
      <div className="w-full flex justify-center mt-12 md:mt-65">
        <div className="max-w-[1212px] md:max-h-[270px] bg-[#ECECEC] rounded-[60px] flex flex-col md:flex-row items-center gap-10 p-6 md:p-0">
          
          <div className="flex-1 w-full md:w-auto">
            <Image
              src="/assets/iphone.png"
              alt="Peejay Illustration"
              width={600}
              height={450}
              className="mb-6 md:mb-40 rounded-lg object-contain"
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          </div>

          
          <div className="flex flex-col justify-center max-w-full md:max-w-[600px] text-center md:text-left">
            <h3 className="text-[30px] font-semibold text-black mb-2">
              Why use Peejay for organizing of task
            </h3>
            <p className="text-[#6b7280] text-base mb-6">
              Lorem ipsum dolor sit amet consectetur. Ac iaculis in nullam etiam. At non cursus.
            </p>
            <button className="bg-[#BEDC38] text-white text-[13px] font-medium px-6 py-3 rounded-full hover:bg-gray-700 transition-colors w-fit mx-auto md:mx-0">
              Start Free Trial
            </button>
          </div>
        </div>
      </div>

      
      <div className="mt-40 w-full relative z-20 hidden md:flex justify-center flex-wrap items-center gap-[50px]">
        {[
          '/assets/iphone2.svg',
          '/assets/iphone3.svg',
          '/assets/iphone4.svg',
          '/assets/iphone1.svg',
        ].map((src, index) => (
          <div key={index}>
            <Image
              src={src}
              alt={`Peejay gallery image ${index + 1}`}
              width={270}
              height={464}
            />
          </div>
        ))}
      </div>

      
      <div className="relative -mt-20 h-[220px] z-0 hidden md:flex justify-center items-center w-full">
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/90 to-transparent z-0" />

        {/* Animated PEEJAY Text */}
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={peejayVariant}
          className="relative z-10 text-[150px] lg:text-[180px] 2xl:text-[220px] lg:ml-25 font-bold tracking-[30px] 2xl:tracking-[70px] leading-none text-center"
          style={{
            background: 'linear-gradient(180deg, #FFFFFF 0%, #cccccc 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            color: 'transparent',
          }}
        >
          PEEJAY
        </motion.h1>
      </div>
    </div>
  );
}
