import React, { Component } from 'react';
import { Nav, NavItem, Navbar, Badge } from 'react-bootstrap'

class Menu extends Component {
    render() {
        return (
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#brand">React-Bootstrap</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <NavItem eventKey={1} href="/about">
                            About
                        </NavItem>
                        <NavItem eventKey={2} href="/contacts">
                            Contact Us
                         </NavItem>
                       
                    </Nav>
                    <Nav pullRight>
                        <NavItem eventKey={1} href="/admin">
                           Admin
                        </NavItem>
                        <NavItem eventKey={2} href="/cart">
                            Your cart
                            <Badge className="badge">1</Badge>
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
};
export default Menu 