import React from 'react';
import ReactDOM from 'react-dom';

import { setConfig } from 'react-hot-loader';

import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import configureStore from './store';

import App from './App';
import * as serviceWorker from './serviceWorker';

import './styles/global.scss';

setConfig({
  ignoreSFC: true,
  pureRender: true,
});

const initialState = (window as any).initialReduxState;
const store = configureStore(initialState);

const Root: React.FC = () => (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(<Root />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
