import React, { Component } from 'react';
import { Row, Col, Well, Button } from 'react-bootstrap'
class BookItem extends Component {
  render() {
    return (
      <Well>
          <Row>
              <Col xs={12}  sm={6} >
              <h6 className="card-title">{this.props.title}</h6>
              <p>{this.props.description}</p>
              <h6>usd . {this.props.price}</h6>
              <Button bsStyle='primary'>Buy Now</Button>
              </Col>
          </Row>
      </Well>
    );
  }
}

export default BookItem;
