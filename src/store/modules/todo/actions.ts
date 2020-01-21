import { action } from 'typesafe-actions';
import { TodoItemI, TodoRawI, TodoActionTypes } from './types';

/**
 * GET LIST
 */
export const fetchTodos = () =>
  action(TodoActionTypes.FETCH_TODOS, [], {
    method: 'get',
    route: '/todos',
  });

export const fetchTodosSuccess = (data: TodoRawI[]) =>
  action(TodoActionTypes.FETCH_TODOS_SUCCESS, data);

export const fetchTodosError = (message: string) =>
  action(TodoActionTypes.FETCH_TODOS_ERROR, message);

/**
 * REMOVE ITEM
 */
export const removeTodo = (id: number) =>
  action(TodoActionTypes.REMOVE_TODO_ITEM, [], {
    method: 'DELETE',
    route: `/todos/${id}`,
  });

export const removeTodoSuccess = () => action(TodoActionTypes.REMOVE_TODO_ITEM_SUCCESS);

export const removeTodoError = (message: string) =>
  action(TodoActionTypes.REMOVE_TODO_ITEM_ERROR, message);

/**
 * ADD ITEM
 */
export const addTodo = (item: TodoItemI) =>
  action(TodoActionTypes.ADD_TODO_ITEM, [], {
    method: 'POST',
    route: `/todos`,
    data: item,
  });

export const addTodoSuccess = () => action(TodoActionTypes.ADD_TODO_ITEM_SUCCESS);

export const addTodoError = (message: string) =>
  action(TodoActionTypes.ADD_TODO_ITEM_ERROR, message);

/**
 * UPDATE ITEM
 */
export const updateTodo = (id: number, item: TodoItemI) =>
  action(TodoActionTypes.UPDATE_TODO_ITEM, [], {
    method: 'PATCH',
    route: `/todos/${id}`,
    data: item,
  });

export const updateTodoSuccess = () => action(TodoActionTypes.UPDATE_TODO_ITEM_SUCCESS);

export const updateTodoError = (message: string) =>
  action(TodoActionTypes.UPDATE_TODO_ITEM_ERROR, message);
