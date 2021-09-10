import React from 'react';

import './styles.css';

const BooksItem = ({ book }) => {

    const { title, author } = book;

    return(
        <div className="books-item">
            <span className="book-title">{title}</span>
            <div className="book-author">
                {author}
            </div>
        </div>
    );
};

export default BooksItem;