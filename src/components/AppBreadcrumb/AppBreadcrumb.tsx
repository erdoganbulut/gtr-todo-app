import React from 'react';

import { Breadcrumb } from 'antd';

const AppBreadcrumb: React.FC = () => (
  <Breadcrumb>
    <Breadcrumb.Item>Home</Breadcrumb.Item>
    <Breadcrumb.Item>List</Breadcrumb.Item>
    <Breadcrumb.Item>App</Breadcrumb.Item>
  </Breadcrumb>
);

export default AppBreadcrumb;
