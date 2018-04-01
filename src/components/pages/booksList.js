import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Grid, Col, Row, Button } from 'react-bootstrap'
import BookItem from './bookItem'
import BookForm from './bookForm'
import Cart from './cart'
class BooksList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dataBook: [{
        id: 1,
        title: 'this is the first book',
        description: 'this is the first book description',
        price: 43.33
      }, {
        id: 2,
        title: 'this is the second book',
        description: 'this is the second book description',
        price: 60
      },
      , {
        id: 3,
        title: 'this is the thrid book',
        description: 'this is the thrid book description',
        price: 60
      }]
    }
  }


  render() {
    const booksList = this.state.dataBook.map(function (booksArr) {
      return (
        <Col xs={12} sm={6}  key={booksArr.id}>
          <BookItem
            id={booksArr.id}
            title={booksArr.title}
            description={booksArr.description}
            price={booksArr.price}
          />
        </Col>
      )
    })
    return (
      <Grid>
        <Row>
          <Cart/>
        </Row>
        <Row>
          <Col xs={12} sm={6} >
            <BookForm />
          </Col>
          {booksList}
        </Row>
        <Row>
         
         
        </Row>
      </Grid>
    )
  }
};
function mapStateToProps(state, ownProps) {
  return {
    books: state.books.books
  }
}

export default connect(mapStateToProps)(BooksList)