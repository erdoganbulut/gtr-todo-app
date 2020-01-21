import { Action, PayloadAction, TypeConstant } from 'typesafe-actions';
import { TodoRawI, TodoStateI, TodoActionTypes } from './types';

export const initialState: TodoStateI = {
  data: [],
  errors: [],
  loading: false,
};

export const todoReducer = (
  state: TodoStateI = initialState,
  action: Action<TypeConstant> & PayloadAction<TypeConstant, TodoRawI[]>,
): TodoStateI => {
  switch (action.type) {
    /**
     * GET LIST
     */
    case TodoActionTypes.FETCH_TODOS: {
      return { ...state, loading: true };
    }
    case TodoActionTypes.FETCH_TODOS_SUCCESS: {
      return { ...initialState, data: action.payload };
    }
    case TodoActionTypes.FETCH_TODOS_ERROR: {
      return { ...state };
    }

    /**
     * REMOVE ITEM
     */
    case TodoActionTypes.REMOVE_TODO_ITEM: {
      return { ...state, loading: true };
    }
    case TodoActionTypes.REMOVE_TODO_ITEM_SUCCESS: {
      return { ...state, loading: false };
    }
    case TodoActionTypes.REMOVE_TODO_ITEM_ERROR: {
      return { ...state };
    }

    /**
     * ADD ITEM
     */
    case TodoActionTypes.ADD_TODO_ITEM: {
      return { ...state, loading: true };
    }
    case TodoActionTypes.ADD_TODO_ITEM_SUCCESS: {
      return { ...state, loading: false };
    }
    case TodoActionTypes.ADD_TODO_ITEM_ERROR: {
      return { ...state };
    }

    /**
     * UPDATE ITEM
     */
    case TodoActionTypes.UPDATE_TODO_ITEM: {
      return { ...state, loading: true };
    }
    case TodoActionTypes.UPDATE_TODO_ITEM_SUCCESS: {
      return { ...state, loading: false };
    }
    case TodoActionTypes.UPDATE_TODO_ITEM_ERROR: {
      return { ...state };
    }

    /**
     * default
     */
    default:
      return state;
  }
};
