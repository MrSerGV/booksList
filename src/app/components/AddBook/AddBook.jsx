import React, { Component } from 'react';
import { v1 as uuidv1 } from 'uuid';

import { ADD_BOOK } from '../../../store/books/actionTypes'

class AddBook extends Component {
    constructor(props){
        super(props)
        this.state = {
            title: '',
            author: '',
        }
    }
    submitForm(e){
        e.preventDefault()
        this.props.dispatch({
            type: ADD_BOOK,
            variables:{
                id: uuidv1(),
                title: this.state.title,
                author: this.state.author,
            },
        })
        document.getElementById("add-book").reset();
    }

    render() {
        return (
            <form id="add-book" onSubmit={this.submitForm.bind(this)}>
                <div className="field">
                    <label>Book name:</label>
                    <input required type="text" onChange={(e) => this.setState({title: e.target.value})}/>
                </div>
                <div className="field">
                    <label>Author:</label>
                    <input required type="text" onChange={(e) => this.setState({author: e.target.value})}/>
                </div>
                <button className='add-book__button'>Add book</button>
            </form>
        );
    }
}

export default AddBook;
