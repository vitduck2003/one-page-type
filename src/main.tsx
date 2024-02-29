// main.ts
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './layouts/Main/Main';
import HomePage from './pages/Home';

ReactDOM.render(
  <React.StrictMode>
    <Main>
      <HomePage />
    </Main>
  </React.StrictMode>,
  document.getElementById('root')
);