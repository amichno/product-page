import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/Header';
import Section from './components/Section';
import Cart from './components/Cart';
import './css/index.scss'



ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Cart />
    <Section />
  </React.StrictMode>,
  document.getElementById('root')
);

