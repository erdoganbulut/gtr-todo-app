import React from 'react';
import { hot } from 'react-hot-loader/root';
import { Button } from 'antd';

import Routes from './routes';

const App: React.FC = () => {
  return (
    <>
      <div className="App">
        App Works!
        <Button type="primary">Button</Button>
      </div>
      <Routes />
    </>
  );
};

export default hot(App);
