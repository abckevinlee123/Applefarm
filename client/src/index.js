import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


// Set root, body, and HTML to full height
document.getElementById('root').style.height = '100vh';
document.body.style.margin = '0';
document.body.style.height = '100vh';
document.documentElement.style.margin = '0';
document.documentElement.style.height = '100vh';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
