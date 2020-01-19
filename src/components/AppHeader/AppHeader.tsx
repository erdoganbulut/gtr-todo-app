import React from 'react';

import { Menu } from 'antd';

import './AppHeader.scss';

const AppHeader: React.FC = () => (
  <header>
    <div className="header--logo">GTR To-do App</div>
    <Menu className="header--menu" theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
      <Menu.Item key="1">Home</Menu.Item>
      <Menu.Item key="2">Detail</Menu.Item>
      <Menu.Item key="3">Documentation</Menu.Item>
    </Menu>
  </header>
);

export default AppHeader;
