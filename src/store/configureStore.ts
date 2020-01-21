import { applyMiddleware, createStore, Store } from 'redux';
import { ApplicationStateI, rootReducer, rootSaga } from './modules/index';
import sagaMiddleware from './middlewares/sagas.middleware';

export default function configureStore(initialState: ApplicationStateI): Store<ApplicationStateI> {
  const middlewares = applyMiddleware(sagaMiddleware);
  const store = createStore(rootReducer, initialState, middlewares);

  sagaMiddleware.run(rootSaga);

  return store;
}
