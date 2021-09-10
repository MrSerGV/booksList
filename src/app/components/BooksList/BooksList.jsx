import React from 'react';
import BooksItem from '../BooksItem/BooksItem';

import './styles.css';


const BooksList = ({ books }) => {
    return (
        <ul className="books-list">
            {
                books.map((book) => {
                    return <li key={book.id}>
                        <BooksItem book={book} />
                    </li>
                })
            }
        </ul>
    );
};

export default BooksList;