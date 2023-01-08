import React from 'react';
import { createRoot } from 'react-dom/client';
import style from './global.css';

const App = () => {
  return (
    <div className='flex flex-col justify-between h-screen'>
      {/* Header */}
      <header className='bg-slate-100'>nav</header>
      {/* Body */}
      <section className='flex-grow mb-auto overflow-y-auto'>body</section>
      {/* Footer */}
      <footer className='bg-slate-100'>footer</footer>
    </div>
  );
};

const container = document.getElementById('app');
const root = createRoot(container);

root.render(<App tab='home' />);
