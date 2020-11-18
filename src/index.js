import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react';
import {store,persistor} from './redux/store';


ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Router>
        <PersistGate persistor={persistor}>
        <App />
        </PersistGate>
      </Router>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

