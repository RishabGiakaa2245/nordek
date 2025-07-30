'use client';
import React, { useState } from 'react';
import Button from '../ui/Button';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import '@/styles/animations.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useIntersectionObserver();

  const menuItems = [
    { label: 'About', href: '#about' },
    { label: 'Products', href: '#products' },
    { label: 'Features', href: '#features' },
    { label: 'Partners', href: '#partners' }
  ];

  return (
    <header className="w-full">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        {/* Header Content with Glass Effect and Border */}
        <div 
          ref={headerRef}
          className="fade-in relative z-10 flex items-center justify-between px-8 lg:px-[177px] py-6 bg-black/20 backdrop-blur-[12.5px] rounded-[20px] border border-white/10 hover-glow" 
        >
          {/* Logo */}
          <div className="flex-shrink-0 hover-scale">
  <svg 
    className="w-[120px] h-[26px] sm:w-[150px] sm:h-[32px] lg:w-[190px] lg:h-[42px]" 
    viewBox="0 0 190 42" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_1_6236)">
      <path d="M28.4407 0.790237V25.6826V36.0234C28.4407 36.3754 28.0153 36.5517 27.7665 36.3028L20.2612 28.7956C20.1871 28.7214 20.1455 28.621 20.1455 28.5162V0.790237C20.1455 0.572021 20.3223 0.395119 20.5405 0.395119H28.0457C28.2639 0.395119 28.4407 0.572016 28.4407 0.790237Z" fill="#8B6CFE" stroke="white" strokeWidth="1.50521"/>
      <path d="M4.22927 1.6284L28.325 25.7305C28.3991 25.8046 28.4407 25.9051 28.4407 26.0099V36.0234C28.4407 36.3754 28.0152 36.5517 27.7664 36.3027L3.67064 12.2007C3.59656 12.1266 3.55495 12.0261 3.55495 11.9213V1.90779C3.55495 1.55578 3.98043 1.37949 4.22927 1.6284Z" fill="#78CAE7" stroke="white" strokeWidth="1.50521"/>
      <path d="M20.5327 28.685V17.2521L28.0614 24.8512L28.0457 35.9556L20.5327 28.685Z" fill="#6A62FD"/>
      <path d="M7.80244 37.6534C10.8264 37.6534 13.2779 35.2013 13.2779 32.1765C13.2779 29.1517 10.8264 26.6997 7.80244 26.6997C4.77845 26.6997 2.32703 29.1517 2.32703 32.1765C2.32703 35.2013 4.77845 37.6534 7.80244 37.6534Z" fill="white"/>
      <path d="M7.80254 37.0091C10.4708 37.0091 12.6338 34.8455 12.6338 32.1766C12.6338 29.5077 10.4708 27.3441 7.80254 27.3441C5.13431 27.3441 2.97128 29.5077 2.97128 32.1766C2.97128 34.8455 5.13431 37.0091 7.80254 37.0091Z" fill="#4BC3FF"/>
      <path d="M37.1499 8.41775H39.4997L55.0155 28.0999L55.0333 28.1179V8.41775H57.8492V32.8186H55.4637L39.984 13.1903L39.9661 13.1723V32.8186H37.1499V8.41775ZM76.7227 33.2852C74.3671 33.2852 72.1905 32.723 70.194 31.5986C68.2084 30.4623 66.6302 28.9253 65.4581 26.9876C64.2982 25.0379 63.7182 22.9088 63.7182 20.6003C63.7182 18.2678 64.2982 16.1327 65.4581 14.195C66.6302 12.2453 68.2084 10.7083 70.194 9.58398C72.179 8.44762 74.3551 7.87946 76.7227 7.87946C79.0788 7.87946 81.2491 8.44762 83.2342 9.58398C85.2313 10.7083 86.8095 12.2453 87.9695 14.195C89.1415 16.1327 89.7272 18.2678 89.7272 20.6003C89.7272 22.9088 89.1415 25.0379 87.9695 26.9876C86.8095 28.9253 85.2313 30.4623 83.2342 31.5986C81.2491 32.723 79.0788 33.2852 76.7227 33.2852ZM76.7227 30.6656C78.5765 30.6656 80.2802 30.223 81.8349 29.3379C83.4016 28.4528 84.6392 27.2447 85.5478 25.7137C86.4689 24.1707 86.9292 22.4662 86.9292 20.6003C86.9292 18.7223 86.4689 17.0119 85.5478 15.4689C84.6392 13.9259 83.4016 12.7118 81.8349 11.8267C80.2802 10.9416 78.5765 10.499 76.7227 10.499C74.8694 10.499 73.1594 10.9475 71.5927 11.8446C70.0381 12.7298 68.8068 13.9438 67.8977 15.4868C66.9892 17.0179 66.5346 18.7223 66.5346 20.6003C66.5346 22.4662 66.9892 24.1707 67.8977 25.7137C68.8183 27.2447 70.0565 28.4528 71.6106 29.3379C73.1652 30.223 74.8694 30.6656 76.7227 30.6656ZM105.964 8.41775C107.506 8.41775 108.882 8.73469 110.089 9.36868C111.309 10.0026 112.26 10.8937 112.941 12.042C113.623 13.1903 113.964 14.512 113.964 16.0071C113.964 17.1913 113.736 18.2738 113.282 19.2546C112.828 20.2235 112.188 21.0369 111.363 21.6947C110.55 22.3406 109.599 22.8011 108.511 23.0762L114.484 32.8186H111.219L105.659 23.4889C105.491 23.5008 105.241 23.5068 104.906 23.5068H98.4483V32.8186H95.6319V8.41775H105.964ZM105.91 21.0847C106.903 21.0847 107.794 20.8694 108.583 20.4388C109.384 20.0082 110.012 19.4101 110.466 18.6446C110.921 17.8791 111.148 17.0059 111.148 16.0251C111.148 15.0562 110.914 14.189 110.448 13.4235C109.994 12.658 109.36 12.0599 108.547 11.6293C107.746 11.1868 106.849 10.9655 105.856 10.9655H98.4483V21.0847H105.91ZM128.819 8.41775C131.367 8.41775 133.609 8.9261 135.546 9.94277C137.495 10.9595 139.002 12.3888 140.066 14.2309C141.13 16.0729 141.662 18.196 141.662 20.6003C141.662 23.0164 141.13 25.1515 140.066 27.0055C139.014 28.8475 137.519 30.2769 135.582 31.2936C133.657 32.3103 131.426 32.8186 128.891 32.8186H120.048V8.41775H128.819ZM128.819 30.2709C130.852 30.2709 132.622 29.8762 134.129 29.0867C135.635 28.2973 136.789 27.1849 137.59 25.7496C138.404 24.3023 138.81 22.6098 138.81 20.672C138.81 18.7343 138.404 17.0298 137.59 15.5586C136.777 14.0874 135.612 12.9511 134.093 12.1497C132.574 11.3482 130.792 10.9475 128.748 10.9475H122.829V30.2709H128.819ZM147.549 8.41775H163.639V11.0014H150.366V19.1829H161.917V21.605H150.366V30.253H163.8V32.8186H147.549V8.41775ZM178.943 19.1649L189.239 32.8186H185.849L177.095 21.2462L172.306 27.1132V32.8186H169.49V8.41775H172.306V23.3453L184.504 8.41775H187.84L178.943 19.1649Z" fill="white"/>
    </g>
    <defs>
      <clipPath id="clip0_1_6236">
        <rect width="190" height="42" fill="white"/>
      </clipPath>
    </defs>
  </svg>
</div>

          {/* Hamburger Menu Icon (Mobile only) */}
          <button 
            className="hover-scale block lg:hidden p-2 text-white transition-all duration-300" 
            aria-label="Open menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg 
              className={`w-6 h-6 transition-transform duration-300 ${menuOpen ? 'rotate-90' : ''}`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-9">
            {/* Navigation Links */}
            <nav className="flex items-center gap-[42px]">
              {menuItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="text-white font-poppins text-base font-medium transition-colors relative group"
                >
                  {item.label}
                  <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-gradient-to-r from-[#6a62fd] to-[#4bc3ff] transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </nav>

            {/* Contact Button */}
            <button className="hover-scale button-hover flex px-6 py-4 justify-center items-center gap-2.5 rounded-[10px] border border-white/20 bg-nordek-button-gradient text-white font-poppins text-sm font-medium leading-[18px] transition-all duration-300">
              Contact Us
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          <nav 
            className={`${menuOpen ? 'translate-y-0 opacity-100' : 'translate-y-[-20px] opacity-0 pointer-events-none'} lg:hidden fixed top-[90px] left-0 right-0 mx-4 transition-all duration-300 ease-in-out bg-black/40 backdrop-blur-[12.5px] rounded-lg border border-white/10 hover-glow z-50`}
            style={{
              boxShadow: '0 0 10px 0 rgba(106, 98, 253, 0.30) inset'
            }}
          >
            <div className="flex flex-col gap-4 p-6">
              {menuItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="text-left text-white font-poppins text-base font-medium transition-all duration-300 py-2 relative group"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[#6a62fd] to-[#4bc3ff] transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
              <div className="pt-2 fade-up">
                <button className="hover-scale button-hover w-full flex px-6 py-4 justify-center items-center gap-2.5 rounded-[10px] border border-white/20 bg-nordek-button-gradient text-white font-poppins text-sm font-medium leading-[18px] transition-all duration-300">
                  Contact Us
                </button>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;