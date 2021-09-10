import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './store/index'
import BooksListContainer from './app/components/BooksListContainer/index';
import AddBook from './app/components/AddBook/index';

import './index.css';

ReactDOM.render(
    <Provider store={store}>
        <BooksListContainer/>
        <AddBook/>
    </Provider>,
  document.getElementById('root')
);
