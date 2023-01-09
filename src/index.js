import React from 'react';
import { createRoot } from 'react-dom/client';
import style from './global.css';
import { Footer, Navbar, Timeline } from './components';

const App = () => {
  return (
    <div className='flex flex-col justify-between h-screen pb-12 text-white bg-gray-900'>
      {/* Header */}
      <header className=''>
        <Navbar />
      </header>
      {/* Body */}
      <section className='flex-grow mb-auto overflow-y-auto'>
        <Timeline />
      </section>
      {/* Footer */}
      <footer className=''>
        <Footer />
      </footer>
    </div>
  );
};

const container = document.getElementById('app');
const root = createRoot(container);

root.render(<App tab='home' />);
