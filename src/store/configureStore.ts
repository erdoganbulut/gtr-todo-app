import { applyMiddleware, createStore, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { ApplicationStateI, rootReducer, rootSaga } from './modules/index';
import sagaMiddleware from './middlewares/sagas.middleware';

export default function configureStore(initialState: ApplicationStateI): Store<ApplicationStateI> {
  const middlewares = applyMiddleware(sagaMiddleware);
  const store = createStore(rootReducer, initialState, composeWithDevTools(middlewares));

  sagaMiddleware.run(rootSaga);

  return store;
}
