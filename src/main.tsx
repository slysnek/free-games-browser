import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { WrappedApp } from './App';
import { store } from './store/reduxStore';
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <WrappedApp />
    </Provider>
  </React.StrictMode>
);
