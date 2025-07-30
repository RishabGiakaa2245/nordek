'use client';
import React from 'react';
import Header from '@/components/common/Header';
import Button from '@/components/ui/Button';
import SplineGlobe from '@/components/ui/SplineGlobe';
import VideoHero from '@/components/ui/VideoHero';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { motion } from 'framer-motion';

const HomePage = () => {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);

      const section = sectionRef.current;
      const cards = cardRefs.current;

      if (!section || !cards.length) return;

      // Check for mobile or desktop
      const mediaQuery = window.matchMedia('(min-width: 640px)');
      
      if (mediaQuery.matches) {
        // Desktop animation
        gsap.set(cards, {
          y: "100vh"
        });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "+=300%",
            pin: true,
            scrub: 1,
            markers: true
          }
        });

        cards.forEach((card, index) => {
          tl.to(card, {
            y: 0,
            duration: 1,
            ease: "power2.out"
          }, index * 0.5);
        });
      } else {
        // Mobile animation
        gsap.set(cards, {
          y: "100vh"
        });

        const mobileTl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "+=200%",
            pin: true,
            scrub: 1
          }
        });

        // Animate cards one by one on mobile
        cards.forEach((card, index) => {
          mobileTl.to(card, {
            y: 0,
            duration: 0.5,
            ease: "power2.inOut"
          }, index * 0.3); // Shorter stagger for mobile
        });
      }

      return () => {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      };
    }
  }, []);
  const industryPartners = [
    { src: '/images/img_67581f654b98724_72x116.png', width: '116', height: '72' },
    { src: '/images/img_66309a2c949f0dd.png', width: '244', height: '30' },
    { src: '/images/img_67694bdb9ee0061.png', width: '168', height: '24' },
    { src: '/images/img_67694bde1ea888d.png', width: '116', height: '40' },
    { src: '/images/img_676948c91943343.png', width: '106', height: '36' },
    { src: '/images/img_67581f654b98724_72x116.png', width: '116', height: '72' },
    { src: '/images/img_66309a2c949f0dd.png', width: '244', height: '30' },
    { src: '/images/img_67694bdb9ee0061.png', width: '168', height: '24' },
    { src: '/images/img_67694bde1ea888d.png', width: '116', height: '40' },
    { src: '/images/img_676948c91943343.png', width: '106', height: '36' },
  ];

  const features = [
    {
      icon: '/images/img_fuel_nozzle_2.png',
      title: 'Minimized BTC Gas Fee',
      description:
        'Experience ultra-low transaction costs for your Bitcoin payments-maximize value without sacrificing speed or security.',
    },
    {
      icon: '/images/img_fast_transaction.png',
      title: 'Fast BTC Transactions',
      description:
        'Send and receive Bitcoin in record time—seamlessly optimized for speed without compromising reliability.',
    },
    {
      icon: '/images/img_secure_shield_1.png',
      title: 'Secure Infrastructure',
      description:
        'Built on a foundation of robust security protocols to keep your assets and data safe at every layer.',
    },
    {
      icon: '/images/img_coding_tools_1.png',
      title: 'Developer Friendly Tool',
      description:
        'Access intuitive APIs, detailed docs, and a suite of flexible tools designed to supercharge your blockchain development.',
    },
  ];

  const partnerLogos = [
    [
      { src: '/images/img_661b469740edaca.svg', width: '162', height: '48' },
      { src: '/images/img_vector.png', width: '150', height: '48' },
      { src: '/images/img_clip_path_group.svg', width: '132', height: '36' },
      { src: '/images/img_661b4697933c5e8.svg', width: '116', height: '36' },
      { src: '/images/img_vector_48x122.png', width: '122', height: '48' },
    ],

    [
      { src: '/images/img_661b469279224465a7939217.svg', width: '124', height: '22' },
      { src: '/images/img_vector_34x122.png', width: '122', height: '34' },
      { src: '/images/img_661b4693206333d.svg', width: '128', height: '30' },
      { src: '/images/img_661b46c3bede83a.png', width: '120', height: '22' },
      { src: '/images/img_67626c123623a6b.svg', width: '148', height: '30' },
    ],

    [
      { src: '/images/img_661b4698bd5832b.svg', width: '140', height: '26' },
      { src: '/images/img_661ae10fd0b47c0.svg', width: '138', height: '32' },
      { src: '/images/img_661b4697122a164.svg', width: '130', height: '40' },
      { src: '/images/img_vector_34x124.png', width: '124', height: '34' },
      { src: '/images/img_vector_34x124.png', width: '124', height: '34' },
    ],

    [
      { src: '/images/img_661ae14dbd5832b.png', width: '110', height: '40' },
      { src: '/images/img_67626d1414d44ac.svg', width: '132', height: '24' },
      { src: '/images/img_67626c3f273a21d.svg', width: '118', height: '28' },
      { src: '/images/img_vector_34x102.png', width: '102', height: '34' },
      { src: '/images/img_clip_path_group_black_900.png', width: '134', height: '46' },
    ],
  ];

  return (
    <motion.div className="bg-global-1 w-full">
      {/* Hero Section */}
      <div className="w-full relative min-h-[80vh]  sm:min-h-screen overflow-hidden">
        {/* Video Background Component */}
        <VideoHero />

        {/* Remove or reduce the animated blobs since video is now the background */}
        <div className="absolute -top-[30%] left-1/2 transform -translate-x-1/2 -translate-y-1/4 w-full h-full pointer-events-none z-[1]">
          <div className="relative w-full h-full">
            {/* Subtle accent blob - reduced opacity */}
            <div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[60%] h-[30%] rounded-full opacity-10"
              style={{
                background:
                  'radial-gradient(circle, rgba(106, 98, 253, 0.3) 0%, rgba(75, 195, 255, 0.2) 50%, transparent 70%)',
                filter: 'blur(100px)',
                animation: 'pulse 6s ease-in-out infinite alternate',
              }}
            />
          </div>
        </div>

        <div className="w-full max-w-[1440px] mx-auto relative z-10">
          <div className="flex flex-col justify-start items-center w-full">
            {/* Header */}
            <Header />

            {/* Main Hero Content */}
            <div className="flex flex-col justify-start items-center w-full  sm:mt-[42px] lg:mt-[56px]   sm:mr-[132px] sm:ml-[88px] lg:mr-[176px] lg:ml-[118px]">
              <div className="flex flex-col justify-start items-center w-full">
                {/* Hero Title */}
                <motion.div 
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="flex flex-col justify-start mt-14 sm:mt-0 items-center w-full relative z-20"
                >
                  <div className="flex flex-row gap-[10px] sm:gap-[15px] lg:gap-[20px] justify-center items-center w-auto">
                    <motion.h1 
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      className="text-[28px] sm:text-[72px] lg:text-[96px] font-poppins font-semibold leading-[50px] sm:leading-[108px] lg:leading-[144px] text-left uppercase text-global-2 drop-shadow-lg"
                    >
                      Empowering
                    </motion.h1>
                    <motion.h1 
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, delay: 0.4 }}
                      className="text-[28px] sm:text-[72px] lg:text-[96px] font-poppins font-semibold leading-[50px] sm:leading-[108px] lg:leading-[144px] text-right uppercase bg-[linear-gradient(134deg,#6a62fd_0%,_#4bc3ff_100%)] bg-clip-text text-transparent drop-shadow-lg"
                    >
                      Finance
                    </motion.h1>
                  </div>
                  <motion.h1 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="text-[28px] sm:text-[72px] lg:text-[96px] font-poppins font-semibold leading-[50px] sm:leading-[108px] lg:leading-[144px] text-center uppercase text-global-2 mt-[-22px] sm:mt-[-33px] lg:mt-[-44px] drop-shadow-lg"
                  >
                    Beyond Borders
                  </motion.h1>
                </motion.div>

                {/* Subtitle with Arrow */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="flex flex-row gap-[6px] sm:gap-[9px] lg:gap-[12px] justify-center items-center w-auto mt-[5px] sm:mt-[7px] lg:mt-[10px] relative z-20"
                >
                  <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1 }}
                    className="text-[16px] sm:text-[24px] lg:text-[32px] font-poppins font-normal leading-[24px] sm:leading-[36px] lg:leading-[48px] text-center text-global-2 drop-shadow-md"
                  >
                    Fuel the future of Payments
                  </motion.p>
                  <motion.button 
                    whileHover={{ scale: 1.1, rotate: 15 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    className="bg-global-5 rounded-[8px] sm:rounded-[12px] lg:rounded-[16px] pt-[3px] pr-[3px] pb-[3px] pl-[3px] sm:pt-[4px] sm:pr-[4px] sm:pb-[4px] sm:pl-[4px] lg:pt-[6px] lg:pr-[6px] lg:pb-[6px] lg:pl-[6px] hover:bg-global-5/80 transition-all duration-300"
                  >
                    <motion.img
                      src="/images/img_arrow_right.svg"
                      alt="Arrow Right"
                      className="w-[16px] h-[16px] sm:w-[24px] sm:h-[24px] lg:w-[32px] lg:h-[32px]"
                    />
                  </motion.button>
                </motion.div>
              </div>

              {/* Products Card - Enhanced glass effect */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="relative w-full max-w-[320px] sm:max-w-[400px] lg:max-w-[480px] h-[140px] sm:h-[160px] lg:h-[180px] mt-20 my-[40px] sm:my-[55px] lg:my-[70px] z-30"
              >
                {/* Card Background with enhanced glass effect */}
                <motion.div
                  whileHover={{ 
                    boxShadow: [
                      '0 0 15px 0 rgba(106, 98, 253, 0.40) inset, 0 8px 32px 0 rgba(0, 0, 0, 0.3)',
                      '0 0 20px 0 rgba(106, 98, 253, 0.60) inset, 0 12px 48px 0 rgba(0, 0, 0, 0.4)'
                    ]
                  }}
                  className="absolute inset-0 rounded-[15px] sm:rounded-[18px] lg:rounded-[20px] border border-white/20 bg-black/30 backdrop-blur-[15px]"
                  style={{
                    boxShadow:
                      '0 0 15px 0 rgba(106, 98, 253, 0.40) inset, 0 8px 32px 0 rgba(0, 0, 0, 0.3)',
                  }}
                />

                {/* Card Content */}
                <div className="relative z-10 flex flex-col items-center gap-3 sm:gap-4 lg:gap-6 px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8 h-full">
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1.4 }}
                    className="flex items-center w-full justify-center mb-1 sm:mb-2 lg:mb-3"
                  >
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 0.8, delay: 1.6 }}
                      className="flex-1 h-[2px] sm:h-[2.5px] lg:h-[3px] bg-gradient-to-r from-transparent via-white/60 to-white max-w-[50px] sm:max-w-[80px] lg:max-w-[120px]"
                    />
                    <motion.h3 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 1.8 }}
                      className="text-white font-poppins text-sm sm:text-lg lg:text-xl font-medium px-2 sm:px-2.5 lg:px-3 drop-shadow-md"
                    >
                      Products
                    </motion.h3>
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 0.8, delay: 1.6 }}
                      className="flex-1 h-[2px] sm:h-[2.5px] lg:h-[3px] bg-gradient-to-l from-transparent via-white/60 to-white max-w-[50px] sm:max-w-[80px] lg:max-w-[120px]"
                    />
                  </motion.div>

                  <div className="flex items-center justify-center gap-3 sm:gap-5 lg:gap-8">
                    {/* Bepay Business Logo */}
                    <motion.div 
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex flex-col items-center"
                    >
                      <motion.img
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 2 }}
                        src="/images/logos/bepay-business-logo.svg"
                        alt="Bepay Business"
                        className="h-8 sm:h-10 lg:h-12 w-auto object-contain drop-shadow-sm"
                      />
                    </motion.div>

                    {/* Bepay Foundation Logo */}
                    <motion.div 
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex flex-col items-center"
                    >
                      <motion.img
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 2.2 }}
                        src="/images/logos/bepay-foundation-logo.svg"
                        alt="Bepay Foundation"
                        className="h-8 sm:h-10 lg:h-12 w-auto object-contain drop-shadow-sm"
                      />
                    </motion.div>

                    {/* Bepay Payment Logo */}
                    <motion.div 
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex flex-col items-center"
                    >
                      <motion.img
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 2.4 }}
                        src="/images/logos/bepay-payment-logo.svg"
                        alt="Bepay Payment"
                        className="h-8 sm:h-10 lg:h-12 w-auto object-contain drop-shadow-sm"
                      />
                    </motion.div>
                  </div>
                </div>
              </motion.div>

              {/* Industry Partners */}
              <div className="relative w-full mt-[65px] sm:mt-[97px] lg:mt-[130px] overflow-hidden z-30">
                <motion.div 
                  initial={{ x: "100%" }}
                  animate={{ x: "-100%" }}
                  transition={{ 
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="flex gap-[10%] items-center whitespace-nowrap"
                >
                  {[...industryPartners, ...industryPartners].map((partner, index) => (
                    <motion.img
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      src={partner.src}
                      alt={`Partner ${index + 1}`}
                      className={`flex-shrink-0 w-[${Math.floor(parseInt(partner.width) * 0.5)}px] h-[${Math.floor(parseInt(partner.height) * 0.5)}px] sm:w-[${Math.floor(parseInt(partner.width) * 0.75)}px] sm:h-[${Math.floor(parseInt(partner.height) * 0.5)}px] lg:w-[${partner.width}px] lg:h-[${partner.height}px] drop-shadow-sm`}
                    />
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full mt-[45px] sm:mt-[67px] lg:mt-[90px]">
        <div className="w-full max-w-[1234px] mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="bg-global-4 border border-header-1 rounded-[10px] sm:rounded-[15px] lg:rounded-[20px] pt-[19px] pr-[19px] pb-[19px] pl-[19px] sm:pt-[28px] sm:pr-[28px] sm:pb-[28px] sm:pl-[28px] lg:pt-[38px] lg:pr-[38px] lg:pb-[38px] lg:pl-[38px]"
            style={{
              boxShadow: '0 0 10px 0 rgba(106, 98, 253, 0.50) inset',
            }}
          >
            <div className="flex flex-row justify-center items-center w-full overflow-hidden">
              <div className="flex flex-row w-[40%] justify-center items-center">
                <img
                  src="/images/img_handshake_1.png"
                  alt="Handshake"
                  className="w-[21px] h-[12px] sm:w-[31px] sm:h-[18px] lg:w-[42px] lg:h-[24px]"
                />
                <p className="text-[16px] sm:text-[24px] lg:text-[32px] font-poppins font-medium leading-[24px] sm:leading-[36px] lg:leading-[48px] text-left uppercase text-global-2 ml-[4px] sm:ml-[6px] lg:ml-[8px]">
                  Industry Partners
                </p>
              </div>

              {/* Scrolling container with fade effects */}
              <div className="relative w-[60%] overflow-hidden pt-[0px] pr-[16px] pb-[0px] pl-[16px] sm:pr-[24px] sm:pl-[24px] lg:pr-[32px] lg:pl-[32px]">
                {/* Left shadow overlay */}
                <div
                  className="absolute left-[-5px] top-0 w-[60px] sm:w-[80px] lg:w-[100px] h-full z-10 pointer-events-none"
                  style={{
                    background: 'linear-gradient(to right, #070707 0% , transparent 100%)',
                    filter: 'blur(2px)',
                  }}
                ></div>

                {/* Right shadow overlay */}
                <div
                  className="absolute right-[-5px] top-0 w-[60px] sm:w-[80px] lg:w-[100px] h-full z-10 pointer-events-none"
                  style={{
                    background: 'linear-gradient(to left,  #070707 0% , transparent 100%)',
                    filter: 'blur(2px)',
                  }}
                ></div>

                {/* Scrolling content */}
                <motion.div 
                  initial={{ x: "0%" }}
                  animate={{ x: "-50%" }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                    repeatType: "loop"
                  }}
                  className="flex items-center"
                >
                    <motion.img
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      src="/images/img_6784f52a9cb0f21_84x174.png"
                      alt="Partner Logo"
                      className="flex-shrink-0 w-[87px] self-center h-[42px] sm:w-[130px] sm:h-[63px] lg:w-[174px] lg:h-[84px] mr-[27px] sm:mr-[40px] lg:mr-[54px]"
                    />
                    <motion.img
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      src="/images/Clip path group.png"
                      alt="Partner Logo"
                      className="flex-shrink-0 w-auto h-[20px] self-center sm:h-[63px] lg:h-[40px] mr-[27px] sm:mr-[40px] lg:mr-[54px]"
                    />
                    <motion.img
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      src="/images/6784f51962c258eac0677996_RSM-Site-Navigation-Logo_Desktop 1.png"
                      alt="Partner Logo"
                      className="flex-shrink-0 w-auto h-[40px] self-center sm:h-[50px] lg:h-[60px] mr-[27px] sm:mr-[40px] lg:mr-[54px]"
                    />
                    <motion.img
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      src="/images/6784f562a86924548c7b7d95_logo 1.png"
                      alt="Partner Logo"
                      className="flex-shrink-0 w-auto h-[40px] self-center sm:h-[50px] lg:h-[60px] mr-[27px] sm:mr-[40px] lg:mr-[54px]"
                    />
           
                    <motion.img
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      src="/images/img_6784f52a9cb0f21_84x174.png"
                      alt="Partner Logo"
                      className="flex-shrink-0 w-[87px] self-center h-[42px] sm:w-[130px] sm:h-[63px] lg:w-[174px] lg:h-[84px] mr-[27px] sm:mr-[40px] lg:mr-[54px]"
                    />
                    <motion.img
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      src="/images/Clip path group.png"
                      alt="Partner Logo"
                      className="flex-shrink-0 w-auto h-[20px] self-center sm:h-[63px] lg:h-[40px] mr-[27px] sm:mr-[40px] lg:mr-[54px]"
                    />
                    <motion.img
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      src="/images/6784f51962c258eac0677996_RSM-Site-Navigation-Logo_Desktop 1.png"
                      alt="Partner Logo"
                      className="flex-shrink-0 w-auto h-[40px] self-center sm:h-[50px] lg:h-[60px] mr-[27px] sm:mr-[40px] lg:mr-[54px]"
                    />
                    <motion.img
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      src="/images/6784f562a86924548c7b7d95_logo 1.png"
                      alt="Partner Logo"
                      className="flex-shrink-0 w-auto h-[40px] self-center sm:h-[50px] lg:h-[60px] mr-[27px] sm:mr-[40px] lg:mr-[54px]"
                    />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
{/* About Us Section */}
        <motion.div className="w-full mt-[60px] sm:mt-[90px] lg:mt-[120px] relative">
          {/* Left Electric Pathway */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="absolute left-[5%] top-[25%] transform -translate-y-1/2 hidden lg:block z-0"
          >
            <img
              src="/images/electric.svg"
              alt="Electric pathway left"
              className="w-auto h-[100px] xl:h-[150px]"
            />
          </motion.div>

          {/* Right Electric Pathway */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="absolute right-[5%] top-[25%] transform -translate-y-1/2 hidden lg:block z-0"
          >
            <img
              src="/images/electric2.svg"
              alt="Electric pathway right"
              className="w-auto h-[100px] xl:h-[150px]"
            />
          </motion.div>

          <motion.div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div className="flex flex-col justify-start items-center w-full pt-[0px] pr-[28px] pb-[0px] pl-[28px] sm:pr-[42px] sm:pl-[42px] lg:pr-[56px] lg:pl-[56px]">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex items-center w-full justify-center mb-12"
              >
                <div className="flex-1 h-[3px] bg-gradient-to-r from-transparent via-cyan-300/50 to-cyan-400 max-w-[80px] sm:max-w-[120px] lg:max-w-[160px]"></div>
                <p className="text-[10px] sm:text-[15px] lg:text-[20px] font-poppins font-medium leading-[15px] sm:leading-[22px] lg:leading-[30px] text-center px-3 text-global-1">
                  About Us
                </p>
                <div className="flex-1 h-[3px] bg-gradient-to-l from-transparent via-cyan-300/50 to-cyan-400 max-w-[80px] sm:max-w-[120px] lg:max-w-[160px]"></div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="flex flex-col justify-start items-center w-[84%] mt-[4px] sm:mt-[6px] lg:mt-[8px]"
              >
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="flex flex-row gap-[6px] sm:gap-[9px] lg:gap-[12px] justify-center items-center w-auto"
                >
                  <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-[20px] sm:text-[48px] lg:text-[64px] font-poppins font-bold leading-[48px] sm:leading-[72px] lg:leading-[96px] text-left uppercase text-global-2"
                  >
                    At
                  </motion.h2>
                  <motion.img
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    whileHover={{ scale: 1.05 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    src="/images/img_group_1707480521.svg"
                    alt="Nordek Logo"
                    className="w-[92px] h-auto sm:w-[213px] sm:h-[51px] lg:w-[284px] lg:h-[68px] "
                  />
                  <motion.h2
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-[20px] text-nowrap sm:text-[48px] lg:text-[64px] font-poppins font-bold leading-[48px] sm:leading-[72px] lg:leading-[96px] text-right uppercase text-global-2"
                  >
                    , we believe
                  </motion.h2>
                </motion.div>
                
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="text-[20px] sm:text-[48px] lg:text-[64px] font-poppins font-bold leading-[48px] sm:leading-[72px] lg:leading-[96px] text-center uppercase text-global-2 mt-[-10px] sm:mt-[-15px] lg:mt-[-20px]"
                >
                  financial freedom should
                </motion.h2>
                
               
                
               

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 1.4 }}
                  className="flex flex-row gap-[6px] sm:gap-[9px] lg:gap-[12px] justify-center items-center w-auto"
                >
                  <motion.h2 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 1.6 }}
                    className="text-[20px] sm:text-[48px] lg:text-[64px] font-poppins font-bold leading-[48px] sm:leading-[72px] lg:leading-[96px] text-left uppercase text-global-2"
                  >
                    know
                  </motion.h2>
                  <motion.img
                     initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    whileHover={{ scale: 1.05 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    src="/images/img_group_1707480526.svg"
                    alt="No Icon"
                    className="w-[38px] h-auto sm:w-[87px] lg:w-[116px]"
                  />
                  <motion.h2 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 1.6 }}
                    className="text-[20px] sm:text-[48px] lg:text-[64px] font-poppins font-bold leading-[48px] sm:leading-[72px] lg:leading-[96px] text-right uppercase text-global-2"
                  >
                    boundaries.
                  </motion.h2>
                </motion.div>
              </motion.div>

              {/* Mission and Vision Cards */}
              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 2 }}
                className="flex flex-col lg:flex-row justify-between items-start gap-[24px] sm:gap-[80px] lg:gap-0 w-full lg:w-[86%] mt-[40px] sm:mt-[60px] lg:mt-[80px]"
              >
                {/* Mission Card */}
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="flex flex-col gap-[16px] sm:gap-[24px] lg:gap-[32px] justify-start items-center w-full lg:w-[46%]"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 2.2 }}
                    className="flex flex-row justify-start items-start w-full pt-[10px] pr-[10px] pb-[10px] pl-[10px] sm:pt-[15px] sm:pr-[15px] sm:pb-[15px] sm:pl-[15px] lg:pt-[20px] lg:pr-[20px] lg:pb-[20px] lg:pl-[20px] rounded-xl"
                    style={{
                      backgroundImage: "url('/images/img_mask_group.png')",
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        variant="outline"
                        className="text-[8px] sm:text-[12px] lg:text-[16px] font-poppins font-semibold leading-[12px] sm:leading-[18px] lg:leading-[24px] text-global-2 border border-button-1 rounded-[5px] sm:rounded-[7px] lg:rounded-[10px] bg-global-4 pt-[3px] pr-[12px] pb-[3px] pl-[12px] sm:pt-[4px] sm:pr-[18px] sm:pb-[4px] sm:pl-[18px] lg:pt-[6px] lg:pr-[24px] lg:pb-[6px] lg:pl-[24px] mb-[92px] sm:mb-[138px] lg:mb-[184px]"
                      >
                        Our Mission
                      </Button>
                    </motion.div>
                  </motion.div>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 2.4 }}
                    className="text-[16px] sm:text-[24px] lg:text-[32px] font-poppins font-semibold leading-[24px] sm:leading-[36px] lg:leading-[48px] text-left text-global-2 w-full"
                  >
                    Empowering the Future of Finance Through Innovation, Speed, and Trust
                  </motion.p>
                </motion.div>

                {/* Vision Card */}
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="flex flex-col gap-[16px] sm:gap-[24px] lg:gap-[32px] justify-start items-center w-full lg:w-[46%]"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 2.6 }}
                    className="flex flex-row justify-start items-start w-full pt-[10px] pr-[10px] pb-[10px] pl-[10px] sm:pt-[15px] sm:pr-[15px] sm:pb-[15px] sm:pl-[15px] lg:pt-[20px] lg:pr-[20px] lg:pb-[20px] lg:pl-[20px] rounded-xl"
                    style={{
                      backgroundImage: "url('/images/img_group_1707480532.png')",
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        variant="outline"
                        className="text-[8px] sm:text-[12px] lg:text-[16px] font-poppins font-semibold leading-[12px] sm:leading-[18px] lg:leading-[24px] text-global-2 border border-button-1 rounded-[5px] sm:rounded-[7px] lg:rounded-[10px] bg-global-4 pt-[3px] pr-[12px] pb-[3px] pl-[12px] sm:pt-[4px] sm:pr-[18px] sm:pb-[4px] sm:pl-[18px] lg:pt-[6px] lg:pr-[24px] lg:pb-[6px] lg:pl-[24px] mb-[92px] sm:mb-[138px] lg:mb-[184px]"
                      >
                        Our Vision
                      </Button>
                    </motion.div>
                  </motion.div>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 2.8 }}
                    className="text-[16px] sm:text-[24px] lg:text-[32px] font-poppins font-semibold leading-[24px] sm:leading-[36px] lg:leading-[48px] text-left text-global-2 w-full"
                  >
                    Leading the Evolution of Global Financial Technologies with Purpose and Innovation
                  </motion.p>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      
      {/* Products Journey Section */}
      <div className="w-full mt-[6px] h-[300vh] sm:h-[450vh] sm:mt-[9px] lg:mt-[12px]">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-start items-end w-full">
            <img
              src="/images/img_group_1707480519.png"
              alt="Decorative Element"
              className="w-[78px] h-[80px] sm:w-[117px] sm:h-[120px] lg:w-[156px] lg:h-[160px] mr-[42px] sm:mr-[63px] lg:mr-[84px] z-50 animate-float-glow"
              animate={{ y: [0, -10, 0] }}
            />
            <div className="flex relative flex-col gap-[30px] sm:gap-[45px] lg:gap-[60px] justify-start items-center w-full mt-[-26px] sm:mt-[-39px] lg:mt-[-52px]"
            ref={sectionRef}
            >
              {/* Products Header */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="flex flex-row justify-center items-center w-full py-[80px] sm:py-[120px] lg:py-[160px] xl:py-[220px] px-[20px] sm:px-[42px] lg:px-[56px] bg-global-1 relative overflow-hidden"
                style={{
                  backgroundImage:
                    "url('/images/img_660291a440f62a021ae80cb3group_1000003392p2000_1.png')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                }}
              >
                {/* Animated overlay for better text readability */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 0.2 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2 }}
                  className="absolute inset-0 bg-black"
                />

                <div className="flex flex-col gap-[4px] sm:gap-[6px] lg:gap-[8px] justify-start items-center w-full max-w-[90%] relative z-0">
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex items-center w-full justify-center mb-8 sm:mb-12"
                  >
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      className="flex-1 h-[2px] sm:h-[3px] bg-gradient-to-r from-transparent via-cyan-300/50 to-cyan-400 max-w-[60px] sm:max-w-[100px] lg:max-w-[160px]"
                    />
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      className="text-[8px] sm:text-[12px] lg:text-[16px] xl:text-[20px] font-poppins font-medium leading-[12px] sm:leading-[18px] lg:leading-[24px] xl:leading-[30px] text-center px-3 text-global-1 whitespace-nowrap"
                    >
                      Our Products
                    </motion.p>
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      className="flex-1 h-[2px] sm:h-[3px] bg-gradient-to-l from-transparent via-cyan-300/50 to-cyan-400 max-w-[60px] sm:max-w-[100px] lg:max-w-[160px]"
                    />
                  </motion.div>
                  <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="text-[24px] sm:text-[36px] lg:text-[48px] xl:text-[64px] font-poppins font-semibold leading-[30px] sm:leading-[42px] lg:leading-[60px] xl:leading-[96px] text-center text-global-2 w-full"
                  >
                    Journey Through Our Product Innovations
                  </motion.h2>
                </div>
              </motion.div>

              {/* Products List */}
              <div className="sm:absolute sm:w-[1440px] sm:h-full sm:flex sm:justify-center" >
                <div className="flex relative h-full justify-center flex-col gap-[40px] sm:gap-[60px] lg:gap-[80px] xl:gap-[120px] w-[90vw] max-w-[1234px] mb-[30px] sm:mb-[45px] lg:mb-[60px] z-10">
                  <>
                    {/* Bepay Money */}
                    <motion.div
                      ref={window.innerWidth >= 640 ? el => cardRefs.current[0] = el : null}
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8 }}
                      className="flex sm:absolute flex-col lg:flex-row backdrop-blur-[12.5px] justify-start items-center w-full border border-header-1 rounded-[10px] sm:rounded-[15px] lg:rounded-[20px] bg-global-3 p-[15px] sm:p-[25px] lg:p-[30px] xl:p-[40px] gap-[20px] lg:gap-[30px]"
                      style={{
                        boxShadow: '0 0 10px 0 rgba(106, 98, 253, 0.50) inset',
                      }}
                    >
                      <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex flex-col gap-[15px] sm:gap-[25px] lg:gap-[35px] xl:gap-[42px] justify-start items-start w-full lg:w-[60%]"
                      >
                        <motion.h3
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6, delay: 0.4 }}
                          className="text-[20px] sm:text-[28px] lg:text-[36px] xl:text-[48px] 2xl:text-[64px] font-poppins font-semibold leading-[26px] sm:leading-[36px] lg:leading-[45px] xl:leading-[60px] 2xl:leading-[96px] text-left text-global-2"
                        >
                          Bepay Money
                        </motion.h3>
                        <motion.p
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6, delay: 0.6 }}
                          className="text-[10px] sm:text-[12px] lg:text-[14px] xl:text-[16px] font-poppins font-normal leading-[14px] sm:leading-[16px] lg:leading-[20px] xl:leading-[26px] text-left text-global-3 w-full"
                        >
                          Bepay empowers businesses to operate globally, supporting seamless
                          transactions in over 100 countries. Whether your customers are in Berlin
                          or Bangkok, Bepay ensures smooth, secure payments-anytime, anywhere.
                        </motion.p>
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6, delay: 0.8 }}
                        >
                          <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                          >
                            <Button
                              variant="outline"
                              className="text-[8px] sm:text-[10px] lg:text-[12px] xl:text-[14px] font-poppins font-medium leading-[12px] sm:leading-[15px] lg:leading-[18px] xl:leading-[21px] text-global-2 border border-button-1 rounded-[5px] sm:rounded-[7px] lg:rounded-[10px] bg-button-1 py-[6px] sm:py-[8px] lg:py-[10px] px-[16px] sm:px-[20px] lg:px-[24px] hover:bg-button-1/80 transition-colors"
                            >
                              View Website
                            </Button>
                          </motion.div>
                        </motion.div>
                      </motion.div>
                      <motion.div 
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="w-full lg:w-[40%] flex justify-center lg:justify-end"
                      >
                        <motion.div
                          whileHover={{ 
                            scale: 1.02,
                            boxShadow: "0 10px 30px -10px rgba(106, 98, 253, 0.3)"
                          }}
                          transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        >
                          <motion.img
                            initial={{ scale: 0.95 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            src="/images/img_macbook_13.png"
                            alt="Bepay Money"
                            className="w-full max-w-[300px] sm:max-w-[350px] lg:max-w-none lg:w-full h-auto aspect-[4/3] object-cover rounded-[5px] sm:rounded-[7px] lg:rounded-[10px]"
                          />
                        </motion.div>
                      </motion.div>
                    </motion.div>

                    {/* Bepay Business */}
                    <div
                      ref={el => cardRefs.current[1] = el}
                      className="flex absolute flex-col lg:flex-row backdrop-blur-[12.5px] justify-start items-center w-full border border-header-1 rounded-[10px] sm:rounded-[15px] lg:rounded-[20px] bg-global-3 p-[15px] sm:p-[25px] lg:p-[30px] xl:p-[40px] gap-[20px] lg:gap-[30px]"
                      style={{
                        boxShadow: '0 0 10px 0 rgba(106, 98, 253, 0.50) inset',
                      }}
                    >
                      <div className="flex flex-col gap-[15px] sm:gap-[25px] lg:gap-[35px] xl:gap-[42px] justify-start items-start w-full lg:w-[60%]">
                        <h3 className="text-[20px] sm:text-[28px] lg:text-[36px] xl:text-[48px] 2xl:text-[64px] font-poppins font-semibold leading-[26px] sm:leading-[36px] lg:leading-[45px] xl:leading-[60px] 2xl:leading-[96px] text-left text-global-2">
                          Bepay Business
                        </h3>
                        <p className="text-[10px] sm:text-[12px] lg:text-[14px] xl:text-[16px] font-poppins font-normal leading-[14px] sm:leading-[16px] lg:leading-[20px] xl:leading-[26px] text-left text-global-3 w-full">
                          Bepay empowers businesses to operate globally, supporting seamless
                          transactions in over 100 countries. Whether your customers are in Berlin
                          or Bangkok, Bepay ensures smooth, secure payments-anytime, anywhere.
                        </p>
                        <Button
                          variant="outline"
                          className="text-[8px] sm:text-[10px] lg:text-[12px] xl:text-[14px] font-poppins font-medium leading-[12px] sm:leading-[15px] lg:leading-[18px] xl:leading-[21px] text-global-2 border border-button-1 rounded-[5px] sm:rounded-[7px] lg:rounded-[10px] bg-button-1 py-[6px] sm:py-[8px] lg:py-[10px] px-[16px] sm:px-[20px] lg:px-[24px] hover:bg-button-1/80 transition-colors"
                        >
                          View Website
                        </Button>
                      </div>
                      <div className="w-full lg:w-[40%] flex justify-center lg:justify-end">
                        <img
                          src="/images/img_macbook_air_2022.png"
                          alt="Bepay Business"
                          className="w-full max-w-[300px] sm:max-w-[350px] lg:max-w-none lg:w-full h-auto aspect-[4/3] object-cover rounded-[5px] sm:rounded-[7px] lg:rounded-[10px]"
                        />
                      </div>
                    </div>

                    {/* Bepay Foundation */}
                    <div
                      ref={el => cardRefs.current[2] = el}
                      className="flex absolute flex-col lg:flex-row backdrop-blur-[12.5px] justify-start items-center w-full border border-header-1 rounded-[10px] sm:rounded-[15px] lg:rounded-[20px] bg-global-3 p-[15px] sm:p-[25px] lg:p-[30px] xl:p-[40px] gap-[20px] lg:gap-[30px]"
                      style={{
                        boxShadow: '0 0 10px 0 rgba(106, 98, 253, 0.50) inset',
                      }}
                    >
                      <div className="flex flex-col gap-[15px] sm:gap-[25px] lg:gap-[35px] xl:gap-[42px] justify-start items-start w-full lg:w-[60%]">
                        <h3 className="text-[20px] sm:text-[28px] lg:text-[36px] xl:text-[48px] 2xl:text-[64px] font-poppins font-semibold leading-[26px] sm:leading-[36px] lg:leading-[45px] xl:leading-[60px] 2xl:leading-[96px] text-left text-global-2">
                          Bepay Foundation
                        </h3>
                        <p className="text-[10px] sm:text-[12px] lg:text-[14px] xl:text-[16px] font-poppins font-normal leading-[14px] sm:leading-[16px] lg:leading-[20px] xl:leading-[26px] text-left text-global-3 w-full">
                          Bepay empowers businesses to operate globally, supporting seamless
                          transactions in over 100 countries. Whether your customers are in Berlin
                          or Bangkok, Bepay ensures smooth, secure payments-anytime, anywhere.
                        </p>
                        <Button
                          variant="outline"
                          className="text-[8px] sm:text-[10px] lg:text-[12px] xl:text-[14px] font-poppins font-medium leading-[12px] sm:leading-[15px] lg:leading-[18px] xl:leading-[21px] text-global-2 border border-button-1 rounded-[5px] sm:rounded-[7px] lg:rounded-[10px] bg-button-1 py-[6px] sm:py-[8px] lg:py-[10px] px-[16px] sm:px-[20px] lg:px-[24px] hover:bg-button-1/80 transition-colors"
                        >
                          View Website
                        </Button>
                      </div>
                      <div className="w-full lg:w-[40%] flex justify-center lg:justify-end">
                        <img
                          src="/images/img_macbook_13.png"
                          alt="Bepay Foundation"
                          className="w-full max-w-[300px] sm:max-w-[350px] lg:max-w-none lg:w-full h-auto aspect-[4/3] object-cover rounded-[5px] sm:rounded-[7px] lg:rounded-[10px]"
                        />
                      </div>
                    </div>
                  </>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Features Section */}
      <div className="w-full">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-[60px] sm:gap-[90px] lg:gap-[120px] justify-start items-center w-full">
            <div className="flex flex-col gap-[42px] sm:gap-[63px] lg:gap-[84px] justify-start items-center w-full">
              <div className="flex flex-col gap-[4px] sm:gap-[6px] lg:gap-[8px] justify-start items-center w-full mr-[23px] ml-[31px] sm:mr-[34px] sm:ml-[46px] lg:mr-[46px] lg:ml-[62px]">
                <div className="flex items-center w-full justify-center mb-12">
                  <div className="flex-1 h-[3px] bg-gradient-to-r from-transparent via-cyan-300/50 to-cyan-400 max-w-[80px] sm:max-w-[120px] lg:max-w-[160px]"></div>
                  <p className="text-[10px] sm:text-[15px] lg:text-[20px] font-poppins font-medium leading-[15px] sm:leading-[22px] lg:leading-[30px] text-center px-3 text-global-1">
                    Features
                  </p>
                  <div className="flex-1 h-[3px] bg-gradient-to-l from-transparent via-cyan-300/50 to-cyan-400 max-w-[80px] sm:max-w-[120px] lg:max-w-[160px]"></div>
                </div>
                <h2 className="text-[32px] sm:text-[48px] lg:text-[64px] font-poppins font-semibold leading-[48px] sm:leading-[72px] lg:leading-[96px] text-center text-global-2 w-full">
                  The Future of Bitcoin Built on Nordek Blockchain
                </h2>
              </div>
              {/* Features Grid */}
              <div className="flex flex-col sm:flex-row gap-[19px] sm:gap-[28px] lg:gap-[38px] justify-center items-center sm:items-end w-full">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="group relative flex flex-col gap-[54px] sm:gap-[81px] lg:gap-[108px] justify-start items-start w-[90%] sm:w-[280px] sm:h-full border border-header-1 rounded-[7px] sm:rounded-[10px] lg:rounded-[14px] bg-[linear-gradient(180deg,#000000_0%,_#151515_100%)] pt-[10px] pr-[10px] pb-[10px] pl-[10px] sm:pt-[15px] sm:pr-[15px] sm:pb-[15px] sm:pl-[15px] lg:pt-[20px] lg:pr-[20px] lg:pb-[20px] lg:pl-[20px] transition-all duration-500 ease-in-out overflow-hidden"
                  >
                    <div className="absolute -bottom-1/2 left-1/2 -translate-x-1/2 w-[100%] h-[100%] bg-[#4bc3ff] opacity-0 group-hover:opacity-20 blur-[50px] rounded-full transition-opacity duration-500 ease-in-out"></div>
                    <img
                      src={feature.icon}
                      alt={feature.title}
                      className={`w-[24px] h-[24px] sm:w-[36px] sm:h-[36px] lg:w-[48px] lg:h-[48px] mt-[14px] ml-[7px] sm:mt-[21px] sm:ml-[10px] lg:mt-[28px] lg:ml-[14px]`}
                    />

                    <div className="flex flex-col gap-[3px] sm:gap-[4px] lg:gap-[6px] justify-start items-start w-full">
                      <h4 className="text-[10px] sm:text-[15px] lg:text-[20px] font-poppins font-semibold leading-[15px] sm:leading-[22px] lg:leading-[30px] text-left text-global-2">
                        {feature.title}
                      </h4>
                      <p className="text-[7px] sm:text-[10px] lg:text-[14px] font-poppins font-normal leading-[10px] sm:leading-[15px] lg:leading-[21px] text-left text-global-3 w-full">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Partners Section */}
            <div className="flex flex-row justify-start items-center w-full max-w-[1234px]">
              <div className="flex flex-col gap-[30px] sm:gap-[45px] lg:gap-[60px] justify-start items-center w-full border border-header-1 rounded-[7px] sm:rounded-[10px] lg:rounded-[14px] bg-[linear-gradient(0deg,#00000066_0%,_#15151566_100%)] pt-[30px] pr-[28px] pb-[30px] pl-[28px] sm:pt-[45px] sm:pr-[42px] sm:pb-[45px] sm:pl-[42px] lg:pt-[60px] lg:pr-[56px] lg:pb-[60px] lg:pl-[56px]">
                <div className="flex flex-col gap-[5px] sm:gap-[7px] lg:gap-[10px] justify-start items-center w-full mr-[33px] ml-[39px] sm:mr-[49px] sm:ml-[58px] lg:mr-[66px] lg:ml-[78px]">
                  {/* Method 4: More subtle gradient effect */}
                  <div className="flex items-center w-full justify-center mb-12">
                    <div className="flex-1 h-[3px] bg-gradient-to-r from-transparent via-cyan-300/50 to-cyan-400 max-w-[80px] sm:max-w-[120px] lg:max-w-[160px]"></div>
                    <p className="text-[10px] sm:text-[15px] lg:text-[20px] font-medium leading-[15px] sm:leading-[22px] lg:leading-[30px] text-center text-cyan-400  px-3 whitespace-nowrap">
                      Partners
                    </p>
                    <div className="flex-1 h-[3px] bg-gradient-to-l from-transparent via-cyan-300/50 to-cyan-400 max-w-[80px] sm:max-w-[120px] lg:max-w-[160px]"></div>
                  </div>
                  <h2 className="text-[32px] sm:text-[48px] lg:text-[64px] font-poppins font-semibold leading-[48px] sm:leading-[72px] lg:leading-[96px] text-center text-global-2">
                    Powering Innovation Together Meet Our Valued Partners
                  </h2>
                  <p className="text-[10px] sm:text-[15px] lg:text-[20px] font-poppins font-normal leading-[15px] sm:leading-[22px] lg:leading-[30px] text-center text-global-3 w-full">
                    Don't wait to unleash your DeFi ideas. Sign up now to access our developer
                    resources and begin building innovative solutions on Nordek's blockchain
                    platform
                  </p>
                </div>
                {/* Partner Logos Grid */}
                <div className="flex flex-row justify-start items-center w-full">
                  <div className="w-full">
                    {/* Flatten the partnerLogos array for grid layout */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 lg:gap-6 auto-rows-fr">
                      {partnerLogos.flat().map((logo, logoIndex) => (
                        <div
                          key={logoIndex}
                          className="flex flex-row justify-center items-center w-full h-full border border-header-1 rounded-[5px] sm:rounded-[7px] lg:rounded-[10px] bg-black pt-[15px] pr-[10px] pb-[15px] pl-[10px] sm:pt-[22px] sm:pr-[15px] sm:pb-[22px] sm:pl-[15px] lg:pt-[30px] lg:pr-[20px] lg:pb-[30px] lg:pl-[20px] min-h-[80px] sm:min-h-[100px] lg:min-h-[120px]"
                        >
                          {/* Special handling for the overlay logo */}
                          {logoIndex === 13 ? (
                            <div className="relative w-full flex justify-center items-center">
                              <img
                                src="/images/img_vector_70x120.png"
                                alt="Partner Logo"
                                className="w-[60px] h-[35px] sm:w-[90px] sm:h-[52px] lg:w-[120px] lg:h-[70px]"
                              />
                              <img
                                src="/images/img_vector_44x84.png"
                                alt="Partner Logo Overlay"
                                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[42px] h-[22px] sm:w-[63px] sm:h-[33px] lg:w-[84px] lg:h-[44px]"
                              />
                            </div>
                          ) : (
                            <img
                              src={logo.src}
                              alt={`Partner Logo ${logoIndex + 1}`}
                              className={`w-[${Math.floor(parseInt(logo.width) * 0.5)}px] h-[${Math.floor(parseInt(logo.height) * 0.5)}px] sm:w-[${Math.floor(parseInt(logo.width) * 0.75)}px] sm:h-[${Math.floor(parseInt(logo.height) * 0.75)}px] lg:w-[${logo.width}px] lg:h-[${logo.height}px] object-contain`}
                            />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Footer */}
            <div className="flex flex-row justify-start items-center w-full max-w-[1234px] mb-[30px] sm:mb-[45px] lg:mb-[60px]">
              <div className="flex flex-col gap-[23px] sm:gap-[34px] lg:gap-[46px] justify-center items-center w-full border border-button-1 rounded-[10px] sm:rounded-[15px] lg:rounded-[20px] bg-global-2 pt-[23px] pr-[23px] pb-[23px] pl-[23px] sm:pt-[34px] sm:pr-[34px] sm:pb-[34px] sm:pl-[34px] lg:pt-[46px] lg:pr-[46px] lg:pb-[46px] lg:pl-[46px]">
                <div className="flex flex-row justify-start items-start w-full">
                  <div className="flex flex-col gap-[32px] sm:gap-[48px] lg:gap-[64px] justify-start items-start self-end w-full">
                    <img
                      src="/images/img_nordek_white_logo.svg"
                      alt="Nordek Logo"
                      className="w-auto h-[32px] sm:w-[352px] sm:h-[78px] lg:w-[470px] lg:h-[104px]"
                    />

                    <div className="flex flex-row justify-start items-center w-full">
                      <button className="border border-[#191919] rounded-[6px] sm:rounded-[9px] lg:rounded-[12px] pt-[6px] pr-[6px] pb-[6px] pl-[6px] sm:pt-[9px] sm:pr-[9px] sm:pb-[9px] sm:pl-[9px] lg:pt-[12px] lg:pr-[12px] lg:pb-[12px] lg:pl-[12px]">
                        <img
                          src="/images/img_frame_1707482311.svg"
                          alt="Social Icon"
                          className="w-[10px] h-[10px] sm:w-[25px] sm:h-[25px] lg:w-[40px] lg:h-[40px]"
                        />
                      </button>
                      <button className="border border-[#191919] rounded-[6px] sm:rounded-[9px] lg:rounded-[12px] pt-[6px] pr-[6px] pb-[6px] pl-[6px] sm:pt-[9px] sm:pr-[9px] sm:pb-[9px] sm:pl-[9px] lg:pt-[12px] lg:pr-[12px] lg:pb-[12px] lg:pl-[12px] ml-[10px] sm:ml-[15px] lg:ml-[20px]">
                        <img
                          src="/images/img_frame_1707482312.svg"
                          alt="Social Icon"
                          className="w-[10px] h-[10px] sm:w-[25px] sm:h-[25px] lg:w-[40px] lg:h-[40px]"
                        />
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-row gap-[24px] sm:gap-[36px] lg:gap-[48px] w-[40%]">
                    <div className="flex flex-col gap-[8px] sm:gap-[12px] lg:gap-[16px] justify-start items-start w-[166px]">
                      <p className="text-[10px] sm:text-[15px] lg:text-[20px] font-poppins font-medium leading-[15px] sm:leading-[22px] lg:leading-[30px] text-left text-global-2">
                        Company
                      </p>
                      <p className="text-[10px] sm:text-[15px] lg:text-[20px] font-poppins font-normal leading-[15px] sm:leading-[22px] lg:leading-[30px] text-left text-global-3">
                        About
                      </p>
                      <p className="text-[10px] sm:text-[15px] lg:text-[20px] font-poppins font-normal leading-[15px] sm:leading-[22px] lg:leading-[30px] text-left text-global-3">
                        Contact Us
                      </p>
                      <p className="text-[10px] sm:text-[15px] lg:text-[20px] font-poppins font-normal leading-[15px] sm:leading-[22px] lg:leading-[30px] text-left text-global-3">
                        Products
                      </p>
                      <p className="text-[10px] sm:text-[15px] lg:text-[20px] font-poppins font-normal leading-[15px] sm:leading-[22px] lg:leading-[30px] text-left text-global-3">
                        Features
                      </p>
                    </div>
                    <div className="flex flex-col gap-[8px] sm:gap-[12px] lg:gap-[16px] justify-start items-start w-auto">
                      <p className="text-[10px] sm:text-[15px] shrink-0 lg:text-[20px] font-poppins font-medium leading-[15px] sm:leading-[22px] lg:leading-[30px] text-left text-global-2">
                        Quick Links
                      </p>
                      <p className="text-[10px] sm:text-[15px] lg:text-[20px] font-poppins font-normal leading-[15px] sm:leading-[22px] lg:leading-[30px] text-left text-global-3">
                        Partners
                      </p>
                      <p className="text-[10px] sm:text-[15px] lg:text-[20px] font-poppins font-normal leading-[15px] sm:leading-[22px] lg:leading-[30px] text-left text-global-3">
                        Careers
                      </p>
                      <p className="text-[10px] sm:text-[15px] lg:text-[20px] font-poppins font-normal leading-[15px] sm:leading-[22px] lg:leading-[30px] text-left text-global-3">
                        Media Kit
                      </p>
                      <p className="text-[10px] sm:text-[15px] lg:text-[20px] font-poppins font-normal leading-[15px] sm:leading-[22px] lg:leading-[30px] text-left text-global-3">
                        Investors
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full h-[0.5px] sm:h-[0.75px]] lg:h-[1px] bg-[#ffffff33]"></div>
                <div className="flex flex-row justify-center items-center w-full">
                  <p className="text-[7px] sm:text-[10px] shrink-0 lg:text-[14px] font-poppins font-normal leading-[10px] sm:leading-[15px] lg:leading-[21px] text-left text-global-3">
                    © 2025 All rights reserved.
                  </p>
                  <div className="flex flex-row justify-end items-center w-full">
                    <p className="text-[7px] sm:text-[10px] lg:text-[14px] font-poppins font-normal leading-[10px] sm:leading-[15px] lg:leading-[21px] text-left text-global-3">
                      Terms & Conditions
                    </p>
                    <p className="text-[7px] sm:text-[10px] lg:text-[14px] font-poppins font-normal leading-[10px] sm:leading-[15px] lg:leading-[21px] text-left text-global-3 ml-[16px] sm:ml-[24px] lg:ml-[32px]">
                      Privacy Policy
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div> 
    
  );
};
export default HomePage;