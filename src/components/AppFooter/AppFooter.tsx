import React from 'react';

import { Icon } from 'antd';

import './AppFooter.scss';

const AppFooter: React.FC = () => (
  <p className="component is-footer">
    &nbsp;
    <a
      href="https://github.com/erdoganbulut/gtr-todo-app"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon type="github" />
    </a>
  </p>
);

export default AppFooter;
