import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { GithubProvider } from './context/github/GitHubContext';
import { AlertProvider } from './context/alert/AlertContext';

ReactDOM.render(
  <React.StrictMode>
    <GithubProvider>
      <AlertProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </AlertProvider>
    </GithubProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
