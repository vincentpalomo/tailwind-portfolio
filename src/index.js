import React from 'react';
import { createRoot } from 'react-dom/client';
import style from './global.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faStream } from '@fortawesome/free-solid-svg-icons';
import { Footer } from './components';

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
