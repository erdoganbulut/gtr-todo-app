import { Action, PayloadAction, TypeConstant } from 'typesafe-actions';
import { BreadcrumbItemI, BreadcrumbActionTypes, BreadcrumbStateI } from './types';

export const initialState: BreadcrumbStateI = {
  data: [],
};

export const breadcrumbReducer = (
  state: BreadcrumbStateI = initialState,
  action: Action<TypeConstant> & PayloadAction<TypeConstant, BreadcrumbItemI[]>,
): BreadcrumbStateI => {
  switch (action.type) {
    case BreadcrumbActionTypes.GET_BREADCRUMB: {
      return { ...state };
    }
    case BreadcrumbActionTypes.SET_BREADCRUMB: {
      return { data: [...[{ title: 'Todo App' }], ...action.payload] };
    }
    default:
      return state;
  }
};
