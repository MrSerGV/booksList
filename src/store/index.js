import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'

import booksSaga from './books/sagas/fetchBooks'
import books from './books/reducer'

const sagaMiddleware = createSagaMiddleware();

const store = createStore(books, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(booksSaga);
export default store;