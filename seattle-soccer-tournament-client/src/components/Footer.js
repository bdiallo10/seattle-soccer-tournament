import React, { Component } from 'react';

import Container from 'react-bootstrap/Container';

class Footer extends Component {
    render() {
        return (
            <div>
                 <Container class="footer">
                     <div>
                        <span>
                            <div>
                                <p>Seattle Soccer Tournament</p>
                            </div>
                            <div>
                                <a href="https://github.com/bdiallo10/seattle-soccer-tournament">Github</a>
                            </div>
                            <div>
                                <p>Created by Boubacar Diallo</p>
                            </div>
                        </span>
                    </div>
                </Container>
            </div>
        );
    }
}

export default Footer;
