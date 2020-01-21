import { MetaActionI } from '..';

export interface TodoStateI {
  readonly data: TodoRawI[];
  readonly loading: boolean;
  readonly errors: [];
}
export type ApiResponse = Record<string, any>;

export interface TodoRawI extends ApiResponse {
  id: number;
  order: number;
  title: string;
  url: string;
  complated: boolean;
}

export const TodoActionTypes = {
  FETCH_TODOS: '@@todo/FETCH_TODOS',
  FETCH_TODOS_SUCCESS: '@@todo/FETCH_TODOS_SUCCESS',
  FETCH_TODOS_ERROR: '@@todo/FETCH_TODOS_ERROR',
};

export interface DispatchToPropsI {
  fetchTodos: () => MetaActionI;
}

export default TodoActionTypes;
