import * as React from 'react';
import { App } from './app';
import { ToastContainer } from 'react-toastify';
// import { HelmetProvider } from 'react-helmet-async';
import ReactDOM from 'react-dom/client';
import 'sanitize.css/sanitize.css';
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from 'react-redux';
import { store } from './Components/Redux/store/index';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <ToastContainer theme="light" />
    <App />
  </Provider>,
);
