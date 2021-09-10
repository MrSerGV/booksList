import { TRIGGER_FETCH_BOOKS, FETCH_SUCCEEDED, ADD_BOOK } from './actionTypes'

const initialState = {
    books: [],
    isLoading: false,
    error: false,
}
const books = (state = initialState, action) => {
    switch (action.type) {
        case ADD_BOOK:
            return {
                ...state,
                books: [...state.books, action.variables],
            };
        case TRIGGER_FETCH_BOOKS:
            return {
                ...state,
                isLoading: true
            };
        case FETCH_SUCCEEDED:
            const { books } = action;
            return {
                ...state,
                books,
                isLoading: false,

            };
        default:
            return state;
    }
};

export default books;