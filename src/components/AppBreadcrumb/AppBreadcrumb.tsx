import React from 'react';
import { useSelector } from 'react-redux';

import { Breadcrumb } from 'antd';

import { ApplicationStateI } from '../../store/modules';
import { BreadcrumbStateI, BreadcrumbItemI } from '../../store/modules/breadcrumb/types';
import './AppBreadcrumb.scss';

const AppBreadcrumb: React.FC = () => {
  const state: BreadcrumbStateI = useSelector(({ breadcrumb }: ApplicationStateI) => ({
    data: breadcrumb.data,
  }));
  return (
    <Breadcrumb className="component is-breadcrumb">
      {state.data.map((item: BreadcrumbItemI) => (
        <Breadcrumb.Item>{item.title}</Breadcrumb.Item>
      ))}
    </Breadcrumb>
  );
};

export default AppBreadcrumb;
