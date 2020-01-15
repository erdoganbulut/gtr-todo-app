import React from 'react';
import { hot } from 'react-hot-loader/root';

import Routes from './routes';

const App: React.FC = () => {
  return (
    <>
      <div className="App">App Works!</div>
      <Routes />
    </>
  );
};

export default hot(App);
