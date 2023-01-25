import React from 'react';

const Navbar = () => {
  return (
    <div className='bg-black'>
      <div className='container px-6 py-4 mx-auto'>
        <div className='lg:flex lg:items-center'>
          <div className='flex items-center justify-between'>
            <div>
              <a href='#' className='text-white'>
                👋 Vincent Palomo
              </a>
            </div>
            <div className=''>
              <a href='#' className='px-1 text-white'>
                Home
              </a>
              <a href='#' className='px-1 text-white'>
                About
              </a>
              <a href='#' className='px-1 text-white'>
                Portfolio
              </a>
              <a href='#' className='px-1 text-white'>
                Resume
              </a>
              <a href='#' className='px-1 text-white'>
                Hire Me 🙏
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
