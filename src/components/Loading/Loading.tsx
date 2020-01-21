import React from 'react';
import { Spin } from 'antd';

import './Loading.scss';

const Loading: React.FC = () => (
  <section className="component is-loading">
    <Spin />
  </section>
);

export default Loading;
