import React from 'react';
import { hot } from 'react-hot-loader/root';
import { Button } from 'antd';

import Routes from './routes';

import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';

const App: React.FC = () => {
  return (
    <>
      <AppHeader />
      App Works!
      <Button type="primary">Button</Button>
      <Routes />
      <AppFooter />
    </>
  );
};

export default hot(App);
