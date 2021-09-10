import { put, takeEvery } from 'redux-saga/effects'

import {
    FETCH_SUCCEEDED,
    FETCH_FAILED,
    TRIGGER_FETCH_BOOKS,
} from '../actionTypes'

const arrBooks = [
    {id: 1, author: 'Leo Tolstoy', title: 'Anna Karenina' },
    {id: 2, author: 'Gustave Flaubert', title: 'Madame Bovary' },
    {id: 3, author: 'Eloquent JavaScript', title: 'Marjin Haverbeke'},
]

function* fetchBooks () {
    try {
        const books = yield new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(arrBooks);
            }, 2000);
        });
        yield put({type: FETCH_SUCCEEDED, books});
    } catch (e) {
        yield put({type: FETCH_FAILED, error: e.message});
    }
}

export default function* booksSaga() {
    yield takeEvery(TRIGGER_FETCH_BOOKS, fetchBooks);
}