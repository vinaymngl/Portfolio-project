import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeContext, ThemeProvider } from './context';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <App/>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);