import React from 'react';
import { createRoot } from 'react-dom/client';
import style from './global.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faStream } from '@fortawesome/free-solid-svg-icons';
import { Footer } from './components';

const App = () => {
  return (
    <div className='h-screen pb-12 text-white bg-slate-700'>
      {/* Header */}
      <header className='py-6'>
        <div className='container flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full'>
          <div className='text-lg font-bold'>Vincent's Portfolio</div>
          <div className='hidden md:flex space-x-12 items-center'>
            <a href='#' className='text-selected-text'>
              Home
            </a>
            <a href='#work'>My work</a>
            <a href='#clients'>Clients</a>
            <a href='#hire'>
              <button className='px-6 py-2 bg-violet-500 font-bold'>
                Hire Me
              </button>
            </a>
          </div>
          <div className='md:hidden'>
            <FontAwesomeIcon icon={faBars} />
          </div>
        </div>
      </header>
      {/* Body */}
      {/* <section className='flex-grow mb-auto overflow-y-auto'>body</section> */}
      <div className='container mt-16 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full'>
        <div className='flex flex-wrap md:flex-nowrap'>
          <nav className='inline-block lg:mr-24 lg-w-4 fixed left-percentage xl:block'>
            <div className='absolute left-50 transfrom -translate-x-1/2 space-y-6 mt-36'>
              <a
                className='nav-dot seletect-circle block w-7 rounded-full border-nav'
                href='#'
              >
                <span className='bg-black px-2 py-1 rounded-md ml-10'>
                  home
                </span>
              </a>
            </div>
          </nav>
        </div>
      </div>
      {/* Footer */}
      <footer className='container flex'>
        <Footer />
      </footer>
    </div>
  );
};

const container = document.getElementById('app');
const root = createRoot(container);

root.render(<App tab='home' />);
