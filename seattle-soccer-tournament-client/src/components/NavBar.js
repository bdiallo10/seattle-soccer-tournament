import React, { Component } from 'react';

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/esm/Button';
import Form from 'react-bootstrap/Form'
import NavDropdown from 'react-bootstrap/NavDropdown'
import FormControl from 'react-bootstrap/FormControl'
import Jumbotron from 'react-bootstrap/Jumbotron'



class NavBar extends Component {
    render() {
        return (
            <div>
                <div className="navbar">
                    <ul>
                        <li>
                            <Nav.Link href='/'>Home</Nav.Link> 
                        </li>

                        <li>
                        <Nav.Link href='/tournament'>Tournament</Nav.Link> 
                        </li>

                        <li>
                            <Nav.Link href='/team'>Team</Nav.Link> 
                        </li>

                        <li>
                            <Nav.Link href='/player'>Player</Nav.Link> 
                        </li>

                        <li>
                            <Nav.Link href='/register'>Register</Nav.Link>
                        </li>
                        <li>
                            <Nav.Link href='/Login'>Login</Nav.Link>
                        </li>
                        <li>
                            <Nav.Link href='/Logout'>Logout</Nav.Link>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default NavBar;
