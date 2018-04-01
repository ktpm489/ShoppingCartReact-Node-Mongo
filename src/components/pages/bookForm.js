import React, { Component } from 'react';
import { Well, Panel, FormControl, FormGroup, ControlLabel, Button } from 'react-bootstrap'
import {findDOMNode } from 'react-dom'
class BooksForm extends Component {
    handleSubmit(){
        let book = [{
            title : findDOMNode(this.refs.title).value,
            description : findDOMNode(this.refs.description).value,
            price: findDOMNode(this.refs.price).value
        }]
        console.log('Data Book' , JSON.stringify(book))
    }
    render() {
        return (
            <Well>
                <Panel>
                    <FormGroup controlId="title">
                        <ControlLabel>Title</ControlLabel>
                        <FormControl
                            type="text"
                            placeholder="Enter Title"
                            ref="title" />
                    </FormGroup>
                    <FormGroup controlId="description">
                        <ControlLabel>Title</ControlLabel>
                        <FormControl
                            type="text"
                            placeholder="Enter Description"
                            ref="description" />
                    </FormGroup>
                    <FormGroup controlId="price">
                        <ControlLabel>Title</ControlLabel>
                        <FormControl
                            type="text"
                            placeholder="Enter price"
                            ref="price" />
                    </FormGroup>
                    <Button bsStyle="primary" onClick={this.handleSubmit.bind(this)}>Save</Button>
                </Panel>
                <Panel style={{ marginTop : '25px'}}>
                    <FormGroup controlId="formControlsSelect">
                        <ControlLabel>Select a book id to delete</ControlLabel>
                        <FormControl ref="delete" componentClass="select" placeholder="select">
                            <option value="select">select</option>
                            <option value="other">other</option>
                        </FormControl>
                    </FormGroup>
                    <Button>Delete</Button>
                </Panel>
            </Well>
        )
    }
};

export default BooksForm