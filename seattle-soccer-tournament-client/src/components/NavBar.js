import React, { Component } from 'react';

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container';


class NavBar extends Component {
    render() {
        return (
            <Container>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <div className="nav-bar">
                        <div>
                            <Navbar.Brand href="/">Seattle Soccer Tournament</Navbar.Brand>
                        </div>
                        <div>
                        <Nav>
                            <Nav.Link href='/'>Home</Nav.Link> {' | '}
                            <Nav.Link href='/tournament'>Tournament</Nav.Link> {' | '}
                            <Nav.Link href='/team'>Team</Nav.Link> {' | '}
                            <Nav.Link href='/player'>Player</Nav.Link> {' | '}
                        </Nav>
                        </div>
                    </div>
                </Navbar>
            </Container>
        );
    }
}

export default NavBar;
