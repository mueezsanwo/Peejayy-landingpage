'use client';

import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="w-full bg-[#BEDC38]">
      <div className="mx-auto w-full max-w-[1540px] h-[50px] px-4 flex flex-row justify-end items-center space-x-6">
        {/* Social Icons */}
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <Image
            src="/assets/twitter.svg"
            alt="X icon"
            width={24}
            height={24}
            className="cursor-pointer hover:opacity-70 transition-opacity"
          />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <Image
            src="/assets/linkedin.svg"
            alt="LinkedIn icon"
            width={24}
            height={24}
            className="cursor-pointer hover:opacity-70 transition-opacity"
          />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <Image
            src="/assets/facebook.svg"
            alt="Facebook icon"
            width={24}
            height={24}
            className="cursor-pointer hover:opacity-70 transition-opacity"
          />
        </a>
      </div>
    </footer>
  );
}
