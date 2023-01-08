import React from 'react';
import { createRoot } from 'react-dom/client';
import style from './global.css';

const App = () => {
  return (
    <div className='flex flex-col justify-between h-screen pb-12 text-white bg-slate-700'>
      {/* Header */}
      <header className='py-6'>
        <div className='container'>
          <div className='text-lg'>Vincent's Portfolio</div>
          <div>
            <a href='#' className='text-selected-text'>
              Home
            </a>
            <a href='#work'>My work</a>
            <a href='#clients'>Clients</a>
            <a href='#hire'>
              <button>Hire Me</button>
            </a>
          </div>
        </div>
      </header>
      {/* Body */}
      <section className='flex-grow mb-auto overflow-y-auto'>body</section>
      {/* Footer */}
      <footer className=''>footer</footer>
    </div>
  );
};

const container = document.getElementById('app');
const root = createRoot(container);

root.render(<App tab='home' />);
