'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { clsx } from 'clsx';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Solutions', href: '/solutions' },
  { label: 'Features', href: '/features' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'FAQs', href: '/faqs' },
];

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full flex justify-center pt-[33px] max-w-[1440px] mx-auto relative z-50">
      <nav
        className={clsx(
          'flex items-center justify-center',
          'rounded-full border-b border-gray-300',
          'shadow-[0px_4px_12.6px_0px_rgba(0,0,0,0.25)]',
          'backdrop-blur-[20px] bg-[#ECECEC]/[0.16]',
          'w-full max-w-[570px] h-auto max-h-[50px]',
          'px-[31px] pt-[11px] pb-[11px] gap-[28px]',
          'z-50'
        )}
      >
        {/* Mobile hamburger toggle */}
        <div className="md:hidden w-full flex justify-between items-center">
          <span className="text-lg font-semibold text-black">Peejayy</span>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-black z-50"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex w-full md:w-auto flex-row items-center md:gap-[30px]">
          {navItems.map(({ label, href }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={clsx(
                  'text-sm font-medium transition-all duration-200 rounded-full',
                  isActive
                    ? 'bg-[#BEDC38] text-black w-[56px] h-[28px] px-[10px] py-[5px] backdrop-blur-[20px]'
                    : 'text-gray-700 hover:text-black'
                )}
              >
                {label}
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Mobile Menu Fullscreen Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-white/95 z-40 flex flex-col items-center justify-center space-y-6 md:hidden transition-all duration-300">
          {navItems.map(({ label, href }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                onClick={() => setIsOpen(false)}
                className={clsx(
                  'text-lg font-semibold',
                  isActive ? 'text-[#BEDC38]' : 'text-black hover:text-[#BEDC38]'
                )}
              >
                {label}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Navbar;
