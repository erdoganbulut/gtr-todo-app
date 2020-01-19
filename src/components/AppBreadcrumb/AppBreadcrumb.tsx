import React from 'react';

import { Breadcrumb } from 'antd';

import './AppBreadcrumb.scss';

const AppBreadcrumb: React.FC = () => (
  <Breadcrumb className="component is-breadcrumb">
    <Breadcrumb.Item>Home</Breadcrumb.Item>
    <Breadcrumb.Item>List</Breadcrumb.Item>
    <Breadcrumb.Item>App</Breadcrumb.Item>
  </Breadcrumb>
);

export default AppBreadcrumb;
