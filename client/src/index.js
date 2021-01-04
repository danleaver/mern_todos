import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Router } from '@reach/router';
import Page1 from './components/Page1';
import Page2 from './components/Page2';

ReactDOM.render(
  <React.StrictMode>
    <Router primary={false}>
      <App path="/">
        <Page1 path="/"/>
        <Page2 path="/2"/>
      </ App>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


