import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import BooksListContainer from './BooksListContainer'
import { getBooks, getLoading, getError } from '../../../store/books/selectors'
import { triggerFetchBooks } from "../../../store/books/actions";

const mapStateToProps = createStructuredSelector({
    books: getBooks,
    isLoading: getLoading,
    error: getError,
})

const mapDispatchToProps = (dispatch) => ({
    fetchBooks: () => dispatch(triggerFetchBooks()),
})

export default connect(mapStateToProps, mapDispatchToProps)(BooksListContainer);