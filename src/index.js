import React from 'react';
import { createRoot } from 'react-dom/client';
import { Router } from 'react-router-dom';
import { Navbar } from './components';
import style from './global.css';

const App = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      {/* <header className='p-4 bg-blue-200'>Header</header> */}
      <Navbar />
      <div className='flex flex-row flex-1'>
        <main className='flex-1 p-4 text-white bg-black'>Content</main>
        {/* <nav className='order-first w-32 p-4 bg-blue-100'>Navigation</nav>
        <aside className='w-32 p-4 bg-blue-100'>Side</aside> */}
      </div>
      <footer className='p-4 bg-blue-200'>Footer</footer>
    </div>
  );
};

const container = document.getElementById('app');
const root = createRoot(container);

root.render(<App tab='home' />);
