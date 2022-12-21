import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import GlobalStyles from './styles/GlobalStyle';
import App from './App';
import store from './redux/config/ConfigStore';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <GlobalStyles />
    <App />
  </Provider>
);
