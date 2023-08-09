import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { HiMenu } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';
import LinkedIn from '../../assets/In-White-96.png';
import Github from '../../assets/github-mark-white.png';
import Twitter from '../../assets/logo-twitter-png-40404.png';
import LightDarkMode from '../ClusterView/ClusterViewHeader/LighDarkMode';
import prismlogodarkmode from '../../assets/prismlogodarkmode.png';

export default function LandingHeader() {
  let Links = [
    { name: 'OVERVIEW', id: 'overview' },
    { name: 'FEATURES', id: 'features' },
    { name: 'GET STARTED', id: 'getting-started' },
    { name: 'MEET THE TEAM', id: 'team' },
  ];

  let [isOpen, setIsOpen] = useState(false);

  const handleNavLinkClick = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      // setIsOpen(false); // Close the mobile menu after clicking a link
    }
  };

  return (
    <header className='bg-[var(--secondary)] px-10 md:px-32  text-[var(--primary)] justify-center items-center relative py-1 top-0 left-0 min-w-full font-bold sticky '>
      <div className='h-24 flex items-center justify-between mx-auto  '>
        {/* logo section */}
        <div
          onClick={(e) => {
            // get the element with id overview. use the Links array from the top
            const homePage = document.getElementById(Links[0].id);
            // use the scrollIntoView method to scroll to the top
            homePage.scrollIntoView({ behavior: 'smooth' });
          }}
          className='font-bold text-2xl cursor-pointer flex items-center gap-1  flex-col '
        >
          {/* logo here */}
          <img
            src={prismlogodarkmode}
            alt='Prism Logo'
            className='w-[3rem]  '
          />
          <span>Prism</span>
        </div>
        {/* Menu icon */}
        <div
          onClick={() => setIsOpen(!isOpen)}
          className=' cursor-pointer md:hidden w-9 h-9  my-auto mx-auto bg-transparent  hover:text-[var(--secondary)] hover:bg-[var(--primary)] rounded-sm flex justify-center items-center  '
        >
          {isOpen ? (
            <AiOutlineClose className='h-8 w-8' />
          ) : (
            <HiMenu className='h-8 w-8' />
          )}
        </div>
        {/* link items */}
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static  md:z-auto text-[var(--secondary)] md:text-[var(--primary)] z-[-1] left-0 w-full md:w-auto  px-0 transition-all duration-500 ease-in ${
            isOpen ? 'top-24' : 'top-[-490px] '
          }`}
        >
          {Links.map((link) => (
            <li
              key={link.name}
              onClick={() => handleNavLinkClick(link.id)}
              className=' p-3 cursor-pointer bg-transparent  hover:text-[var(--secondary)] hover:bg-[var(--primary)] rounded-sm flex justify-center items-center'
            >
              {link.name}
            </li>
          ))}
        </ul>
        {/* Social Media */}
        <ul className='flex flex-col items-center gap-2 sm:flex-row  py-1 my-1 '>
          <li className='p-0 m-0'>
            <a href='https://twitter.com/K8sPrism' target='_blank'>
              <img
                src={Twitter}
                alt='Twitter OLD Logo'
                className='w-9 h-9 p-0 m-0'
              />
            </a>
          </li>
          <li className='p-0 m-0'>
            <a
              href='https://www.linkedin.com/in/prism-kubernetes-visualizer/'
              target='_blank'
            >
              <img
                src={LinkedIn}
                alt='LinkedIn Logo'
                className='w-7 h-7 p-0 m-0 '
              />
            </a>
          </li>
          <li className='p-0 m-0'>
            <a href='https://github.com/oslabs-beta/Prism' target='_blank'>
              <img src={Github} alt='Github Logo' className='w-7 h-7 ' />
            </a>
          </li>
        </ul>
        {/* light/Dark Mode */}
        <LightDarkMode />
        <div>
          <NavLink to='/dashboard'>Dashboard</NavLink>
        </div>
      </div>
    </header>
  );
}
