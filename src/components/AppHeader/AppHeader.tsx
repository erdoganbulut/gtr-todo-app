import React from 'react';

import { useLocation, Link } from 'react-router-dom';

import { Menu } from 'antd';

import './AppHeader.scss';

const AppHeader: React.FC = () => {
  const location = useLocation();
  return (
    <header>
      <div className="header--logo">GTR To-do App</div>
      <Menu
        className="header--menu"
        theme="dark"
        mode="horizontal"
        selectedKeys={[location.pathname]}
      >
        <Menu.Item key="/">
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="/documentation">
          <Link to="/documentation">Documentation</Link>
        </Menu.Item>
      </Menu>
    </header>
  );
};

export default AppHeader;
