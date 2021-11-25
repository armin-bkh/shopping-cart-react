import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './scss/main.scss';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import 'react-loading-skeleton/dist/skeleton.css'

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

