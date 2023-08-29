import React from 'react';

// import logo 
import Logo from '../assets/img/logo-white.svg';

// import {social} from '../data.js'

const Footer = () => {
  return (
    <footer className='bg-orange py-8 lg:py-4'>
      <div className='container mx-auto'>
        <div className='flex text-white flex-col gap-y-6 lg:flex-row items-center justify-between'>
          {/* logo  */}
          <a href="#">
            <img src={Logo} alt="" />
          </a>
          {/* copy right text  */}
          <div className='text-[15px]'>
            &copy; Copyright 2023. All rights reserved.
          </div>
         
        </div>
      </div>
    </footer>
  );
};

export default Footer;