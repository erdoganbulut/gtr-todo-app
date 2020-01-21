import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import { MetaActionI } from '..';
import apiCaller from '../../utils/api';
import { fetchTodosError, fetchTodosSuccess } from './actions';
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

/**
 * @desc Watches every specified action and runs effect method and passes action args to it
 */
function* watchFetchRequest(): Generator {
  yield takeEvery(TodoActionTypes.FETCH_TODOS, handleFetch);
}

/**
 * @desc saga init, forks in effects, other sagas
 */
export default function* todoSaga() {
  yield all([fork(watchFetchRequest)]);
}
