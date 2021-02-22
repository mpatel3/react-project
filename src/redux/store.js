import { createStore, applyMiddleware } from "redux";
import { persistStore } from 'redux-persist';
import rootReducer from './root.reducer.js';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './root.saga'

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const middlewares = [thunk, sagaMiddleware];

if(process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
}
// mount it on the Store
export const store = createStore(rootReducer, applyMiddleware(...middlewares));

// then run the saga
sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

export default { store, persistor };
