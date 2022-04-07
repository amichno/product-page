import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Section from './components/Section';
import './css/index.scss'



ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Section />
  </React.StrictMode>,
  document.getElementById('root')
);

