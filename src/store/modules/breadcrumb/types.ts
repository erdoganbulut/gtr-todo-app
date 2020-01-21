export interface BreadcrumbStateI {
  readonly data: BreadcrumbItemI[];
}

export interface BreadcrumbItemI {
  title: string;
}

export const BreadcrumbActionTypes = {
  GET_BREADCRUMB: '@@todo/GET_BREADCRUMB',
  SET_BREADCRUMB: '@@todo/SET_BREADCRUMB',
};

export default BreadcrumbActionTypes;
