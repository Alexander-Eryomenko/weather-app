import React from 'react';

import ReactDOM from 'react-dom/client';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import {BrowserRouter} from 'react-router-dom';

import store from './store';
import { persistor } from './store';

import './firebase';

import App from './App';

import './index.scss';
import './assets/fonts/bodoniFonts.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <BrowserRouter>
          <Provider store={store}>
              <PersistGate loading={null} persistor={persistor}>
                  <App />
              </PersistGate>
          </Provider>
      </BrowserRouter>
);
