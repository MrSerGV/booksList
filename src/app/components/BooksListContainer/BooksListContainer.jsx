import React, { useEffect } from 'react';
import BookList from '../BooksList/BooksList';

const BooksListContainer = ({ books, isLoading, error, fetchBooks }) => {
    useEffect(() => {
        if(books.length === 0){
            fetchBooks()
        }
    }, [books, fetchBooks]);
    if(isLoading){
        return (<div>Loading books...</div>);
    }
    if(error) {
        return (<div>Error: {error}</div>);
    }
    return (
        <BookList books={books} />
    );
};

export default BooksListContainer;