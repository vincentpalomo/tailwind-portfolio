import React from 'react';
import { createRoot } from 'react-dom/client';
import style from './global.css';

const App = () => {
  return (
    <div className=''>
      {/* Header */}

      {/* Body */}

      {/* Footer */}
    </div>
  );
};

const container = document.getElementById('app');
const root = createRoot(container);

root.render(<App tab='home' />);
