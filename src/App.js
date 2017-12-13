import React, { Component } from 'react';
import Container from 'muicss/lib/react/container';
import Button from 'muicss/lib/react/button';
import Title from './title';
import books from './books';
import './App.css';


class App extends Component {

  render() {
    const book = books.map((book) => <li key={ book.isbn.toString() } className="book-item">
                                       <img src={ book.cover } className="img-thumbnail float-left" alt={ book.title } />
                                       <h2 className="book-item--title">{ book.title }</h2>
                                       <h3 className="book-item--author">{ book.author }</h3>
                                       <i className="fa fa-heart fa-2x" aria-hidden="true"></i>
                                       <i className="fa fa-trash fa-2x" aria-hidden="true"></i>
                                     </li>);

    return ( < div className="App">
               <Container className="main-container">
                 < Title />
                 < ul className="book-container">
                   { book }
                   </ul>
               </Container>
               </div>
    )
  }
}

export default App;