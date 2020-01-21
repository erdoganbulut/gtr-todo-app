import { action } from 'typesafe-actions';
import { TodoRawI, TodoActionTypes } from './types';

export const fetchTodos = () =>
  action(TodoActionTypes.FETCH_TODOS, [], {
    method: 'get',
    route: '/todos',
  });

export const fetchTodosSuccess = (data: TodoRawI[]) =>
  action(TodoActionTypes.FETCH_TODOS_SUCCESS, data);

export const fetchTodosError = (message: string) =>
  action(TodoActionTypes.FETCH_TODOS_ERROR, message);

export const removeTodo = (id: number) =>
  action(TodoActionTypes.REMOVE_TODO_ITEM, [], {
    method: 'DELETE',
    route: `/todos/${id}`,
  });

export const removeTodoSuccess = () => action(TodoActionTypes.REMOVE_TODO_ITEM_SUCCESS);

export const removeTodoError = (message: string) =>
  action(TodoActionTypes.REMOVE_TODO_ITEM_ERROR, message);
