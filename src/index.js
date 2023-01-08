import React from 'react';
import { createRoot } from 'react-dom/client';
import style from './global.css';

const App = () => {
  return <div className='text-3xl'>Hello World</div>;
};

const container = document.getElementById('app');
const root = createRoot(container);

root.render(<App tab='home' />);
