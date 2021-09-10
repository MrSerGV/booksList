import { ADD_BOOK, TRIGGER_FETCH_BOOKS } from './actionTypes'

export const triggerFetchBooks = () => ({ type: TRIGGER_FETCH_BOOKS })
export const addBook = (variables) => ({
        type: ADD_BOOK,
        variables,
})
