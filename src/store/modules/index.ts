import { combineReducers } from 'redux';
import { all, fork } from 'redux-saga/effects';
import { Action, MetaAction, PayloadAction, TypeConstant } from 'typesafe-actions';
import { todoReducer } from './todo/reducers';
import { breadcrumbReducer } from './breadcrumb/reducers';
import todoSaga from './todo/sagas';
import { TodoStateI } from './todo/types';
import { BreadcrumbStateI } from './breadcrumb/types';

interface MetaI {
  method: string;
  route: string;
  data?: object;
}

// The top-level state object
export interface ApplicationStateI {
  todo: TodoStateI;
  breadcrumb: BreadcrumbStateI;
}

export type MetaActionI = MetaAction<TypeConstant, MetaI>;

export interface ReducerActionI<TPayload>
  extends Action<TypeConstant>,
    PayloadAction<TypeConstant, TPayload> {}

export const rootReducer = combineReducers<ApplicationStateI>({
  todo: todoReducer,
  breadcrumb: breadcrumbReducer,
});

export function* rootSaga() {
  yield all([fork(todoSaga)]);
}
