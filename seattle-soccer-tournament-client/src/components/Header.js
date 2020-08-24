import React, { Component } from 'react';


import Jumbotron from 'react-bootstrap/Jumbotron';


class Header extends Component {
    render() {
        return (
            <div>
                <Jumbotron>
                 <h1 className="header">Welcome to Seattle Soccer Tournament</h1>
                 <p>The One Place to Create a Tournament, Have Team Register and add their players</p>
                </Jumbotron>
            </div>
        );
    }
}

export default Header;
