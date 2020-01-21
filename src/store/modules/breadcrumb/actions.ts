import { action } from 'typesafe-actions';
import { BreadcrumbItemI, BreadcrumbActionTypes } from './types';

export const getBreadcrumb = () => action(BreadcrumbActionTypes.GET_BREADCRUMB);

export const setBreadcrumb = (breadcrumb: BreadcrumbItemI[]) =>
  action(BreadcrumbActionTypes.SET_BREADCRUMB, breadcrumb);
