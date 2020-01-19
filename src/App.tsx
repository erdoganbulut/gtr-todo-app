import React from 'react';
import { hot } from 'react-hot-loader/root';
import { Layout } from 'antd';

import Routes from './routes';

import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';

const App: React.FC = () => {
  return (
    <Layout>
      <AppHeader />
      <div className="content">
        <Routes />
      </div>
      <AppFooter />
    </Layout>
  );
};

export default hot(App);
