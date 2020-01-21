import { MetaActionI } from '..';

export interface TodoStateI {
  readonly data: TodoRawI[];
  readonly loading: boolean;
  readonly errors: [];
}
export type ApiResponse = Record<string, any>;

export interface TodoItemI extends ApiResponse {
  order: number;
  title: string;
  completed: boolean;
}

export interface TodoRawI extends TodoItemI {
  id: number;
  url: string;
}

export const TodoActionTypes = {
  FETCH_TODOS: '@@todo/FETCH_TODOS',
  FETCH_TODOS_SUCCESS: '@@todo/FETCH_TODOS_SUCCESS',
  FETCH_TODOS_ERROR: '@@todo/FETCH_TODOS_ERROR',
  REMOVE_TODO_ITEM: '@@todo/REMOVE_TODO_ITEM',
  REMOVE_TODO_ITEM_SUCCESS: '@@todo/REMOVE_TODO_ITEM_SUCCESS',
  REMOVE_TODO_ITEM_ERROR: '@@todo/REMOVE_TODO_ITEM_ERROR',
  ADD_TODO_ITEM: '@@todo/ADD_TODO_ITEM',
  ADD_TODO_ITEM_SUCCESS: '@@todo/ADD_TODO_ITEM_SUCCESS',
  ADD_TODO_ITEM_ERROR: '@@todo/ADD_TODO_ITEM_ERROR',
  UPDATE_TODO_ITEM: '@@todo/UPDATE_TODO_ITEM',
  UPDATE_TODO_ITEM_SUCCESS: '@@todo/UPDATE_TODO_ITEM_SUCCESS',
  UPDATE_TODO_ITEM_ERROR: '@@todo/UPDATE_TODO_ITEM_ERROR',
};

export default TodoActionTypes;
