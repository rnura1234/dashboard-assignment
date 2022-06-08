import React, { useState } from 'react';
import logo from './logo.svg';
import { flushSync } from 'react-dom';
import './App.css';
// import MainContent from './components/Content/Order.js';
import Navbar from './components/Header/Navbar.js';
import Sidebar from './components/Sidebar/Sidebar';
import Order from './components/Content/Order.js';

import Dashboard from './components/Content/Dashboard';
import Inventory from './components/Content/Inventory';
import Shopping from './components/Content/Shopping';
import Channel from './components/Content/Channel';

function App() {
  return (
    <React.Fragment>
      
      <header className='header'>
        <Navbar />
      </header>
      <main className='main'>
        <div className='sidebar'>
          <Sidebar />
        </div>
        <div className='main-content'>
          <Order />
        </div>
      </main>
    </React.Fragment>
  );
}

export default App;
