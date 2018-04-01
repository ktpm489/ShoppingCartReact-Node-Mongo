import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Panel, Col, Row, Well, Button, Label, ButtonGroup, Modal } from 'react-bootstrap'


class Cart extends Component {

    constructor(props){
        super(props)
        this.open = this.open.bind(this);
        this.close = this.close.bind(this);
        this.state= ({
            show : false
        })
    }

    open(){
        this.setState({ show :  true })
    }
    close() {
        this.setState({ show : false})
    }
    render() {
        if (this.props.cart && this.props.cart[0]) {
            return this.renderCart()
        } else {
            return this.renderEmpty()
        }
    }

    renderEmpty() {
        return (<Panel header="Cart" bsStyle="primary">
            <Row>
                <Col xs={12}>
                    <h6>Total amount: </h6>
                    <Button onClick={this.open} bsStyle="success" bsSize="small">
                        PROCEED TO CHECKOUT
                    </Button>
                </Col>
            </Row>
            <Modal show={this.state.show} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Thanks You !</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <h6>You order has been saved</h6>
           <p>You will receive  an email confirmation</p>
          </Modal.Body>
          <Modal.Footer>
              <Col xs={6}>
              <h6>total $:</h6>
              </Col>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>
        </Panel>)
    }

    renderCart() {
        const cartItemsList = this.props.cart.map(function (cartArr) {
            <Panel key={cartArr.id}>
                <Row>
                    <Col xs={12} sm={4}>
                        <h6>{cartArr.title}</h6>
                    </Col>
                    <Col xs={12} sm={2}>
                        <h6> usd. {cartArr.price}</h6>
                    </Col>
                    <Col xs={12} sm={2}>
                        <h6>qty. <Label bsStyle="success"> </Label></h6>
                    </Col>
                    <Col xs={6} sm={4}>
                        <ButtonGroup style={{ minWidth: '300px' }}>
                            <Button bsStyle="default" bsSize="small">+</Button>
                            <Button bsStyle="default" bsSize="small">-</Button>
                            <span></span>
                            <Button bsStyle="danger" bsSize="small">DELETE</Button>
                        </ButtonGroup>
                    </Col>
                </Row>
            </Panel>
        })
        return (
            <Panel header="Cart" bsStyle="primary">
                {cartItemsList}
                <Row>
                    <Col xs={12}>
                        <h6>Total amount: </h6>
                        <Button bsStyle="success" bsSize="normal">
                            PROCEED TO CHECKOUT
                 </Button>
                    </Col>
                </Row>
            </Panel>
        )
    }
}
/* function  mapDispatchToProps(dispatch){
    return bindActionCreators({
        deleteCartItem : deleteCartItem
    },dispatch)
}
 */
export default Cart 