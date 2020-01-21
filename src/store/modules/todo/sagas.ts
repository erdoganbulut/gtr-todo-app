import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import { MetaActionI } from '..';
import apiCaller from '../../utils/api';
import {
  fetchTodosError,
  fetchTodosSuccess,
  removeTodoSuccess,
  removeTodoError,
  fetchTodos,
  addTodoSuccess,
  addTodoError,
} from './actions';
import { TodoRawI, TodoActionTypes } from './types';

/**
 * @desc Business logic of effect.
 */
function* handleFetch(action: MetaActionI): Generator {
  try {
    const res: TodoRawI[] | any = yield call(apiCaller, action.meta.method, action.meta.route);

    yield put(fetchTodosSuccess(res));
  } catch (err) {
    if (err instanceof Error) {
      yield put(fetchTodosError(err.stack!));
    } else {
      yield put(fetchTodosError('An unknown error occured.'));
    }
  }
}

function* handleRemove(action: MetaActionI): Generator {
  try {
    yield call(apiCaller, action.meta.method, action.meta.route);
    yield put(removeTodoSuccess());
    yield put(fetchTodos());
  } catch (err) {
    if (err instanceof Error) {
      yield put(removeTodoError(err.stack!));
    } else {
      yield put(removeTodoError('An unknown error occured.'));
    }
  }
}

function* handleAdd(action: MetaActionI): Generator {
  try {
    yield call(apiCaller, action.meta.method, action.meta.route, action.meta.data);
    yield put(addTodoSuccess());
    yield put(fetchTodos());
  } catch (err) {
    if (err instanceof Error) {
      yield put(addTodoError(err.stack!));
    } else {
      yield put(addTodoError('An unknown error occured.'));
    }
  }
}

/**
 * @desc Watches every specified action and runs effect method and passes action args to it
 */
function* watchFetchRequest(): Generator {
  yield takeEvery(TodoActionTypes.FETCH_TODOS, handleFetch);
}

function* watchRemoveRequest(): Generator {
  yield takeEvery(TodoActionTypes.REMOVE_TODO_ITEM, handleRemove);
}

function* watchAddRequest(): Generator {
  yield takeEvery(TodoActionTypes.ADD_TODO_ITEM, handleAdd);
}

/**
 * @desc saga init, forks in effects, other sagas
 */
export default function* todoSaga() {
  yield all([fork(watchFetchRequest), fork(watchRemoveRequest), fork(watchAddRequest)]);
}
