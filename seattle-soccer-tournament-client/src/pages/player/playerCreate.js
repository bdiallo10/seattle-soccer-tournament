import React, { Component } from 'react';
import PlayerModel from '../../models/player'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class playerCreate extends Component {
        state = {
            playerName: '',
            age: '',
            countryOfOrigin: '',
            playerLocation: '',
        }
    
        handleSubmit = (event) => {
            event.preventDefault();
            PlayerModel.create(this.state)
                .then(data => {
                    
                    this.props.history.push('/player')
                })
        }
    
        handleChange = (event) => {
            this.setState({
                [event.target.name]: event.target.value
            })
        }

    render() {
        return (
            <div className="createForm">
               <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="formTitle">
                        <Form.Label>Player Name</Form.Label>
                        <Form.Control
                            type="text"
                            name="playerName"
                            placeholder="Enter your first and last name"
                            onChange={this.handleChange}
                            value={this.state.playerName}
                        />

                        <Form.Label>Player Age</Form.Label>
                        <Form.Control
                            type="text" 
                            name="age"
                            placeholder="Please enter your age"
                            onChange={this.handleChange}
                            value={this.state.age}
                        />

                        <Form.Label>Place of Birth</Form.Label>
                        <Form.Control 
                            type="text"
                            name="countryOfOrigin"
                            placeholder="Place enter your birthplace"
                            onChange={this.handleChange}
                            value={this.state.countryOfOrigin}
                        />

                        <Form.Label>Where do you currently live?
                        </Form.Label>
                        <Form.Control 
                            type="name"
                            name="playerLocation"
                            placeholder="Enter the location of your tournament"
                            onChange={this.handleChange}
                            value={this.state.playerLocation}
                        />

                        <Form.File id="formcheck-api-regular">
                            <Form.File.Label>Please upload a picture of yourself</Form.File.Label>
                            <Form.File.Input />
                        </Form.File>

                        <Button type="submit" value="Submit form!">Submit form!</Button>
                    </Form.Group>
                </Form>
            </div>
        );
    }
}

export default playerCreate;
