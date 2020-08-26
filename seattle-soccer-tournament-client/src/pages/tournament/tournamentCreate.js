import React, { Component } from 'react';
import TournamentModel from '../../models/tournament'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'



class tournamentCreate extends Component {
    state = {
        title: '',
        administrator: '',
        date: '',
        location: '',
    }

    handleSubmit = (event) => {
        event.preventDefault();
        TournamentModel.create(this.state)
            .then(data => {
                
                this.props.history.push('/tournament')
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
                        <Form.Label>Tournament Title</Form.Label>
                        <Form.Control
                            type="text"
                            name="title"
                            placeholder="Enter the title of your tournament"
                            onChange={this.handleChange}
                            value={this.state.title}
                        />

                        <Form.Label>Tournament Administrator</Form.Label>
                        <Form.Control 
                            type="text"
                            name="administrator"
                            placeholder="Enter the Name of the Tournament Administrator"
                            onChange={this.handleChange}
                            value={this.state.administrator}
                        />

                        <Form.Label>Enter the Start Date Tournament</Form.Label>
                        <Form.Control 
                            type="text"
                            name="date"
                            placeholder="Enter the start date of your tournament"
                            onChange={this.handleChange}
                            value={this.state.date}
                        />

                        <Form.Label>Enter the General Location of your Tournament <br />
                        For example, Seattle, Washington if the tournament is around Seattle
                        </Form.Label>
                        <Form.Control 
                            type="name"
                            name="location"
                            placeholder="Enter the location of your tournament"
                            onChange={this.handleChange}
                            value={this.state.location}
                        />
                        <Form.File id="formcheck-api-regular">
                            <Form.File.Label>Upload a Picture for your Tournament</Form.File.Label>
                            <Form.File.Input />
                        </Form.File>

                    <Button type="submit" value="Submit form!">Submit form!</Button>
                    </Form.Group>

                    
                </Form>
            </div>
        );
    }
}

export default tournamentCreate;
