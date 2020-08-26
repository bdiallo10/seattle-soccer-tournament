import React, { Component } from 'react';
import TeamModel from '../../models/team'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class teamCreate extends Component {
    state = {
        teamName: '',
        manager: '',
        captain: '',
        teamLocation: '',
    }

    handleSubmit = (event) => {
        event.preventDefault();
        TeamModel.create(this.state)
            .then(data => {
                this.props.history.push('/team')
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
                        <Form.Label>Team Name</Form.Label>
                        <Form.Control
                            type="text"
                            name="teamName"
                            placeholder="Please enter your team name"
                            onChange={this.handleChange}
                            value={this.state.teamName}
                        />

                        <Form.Label>Team Manager</Form.Label>
                        <Form.Control 
                            type="text"
                            name="manager"
                            placeholder="Enter Your Team Manager Name"
                            onChange={this.handleChange}
                            value={this.state.manager}
                        />

                        <Form.Label>Team Captain</Form.Label>
                        <Form.Control
                            type="text" 
                            name="captain"
                            placeholder="Enter Your Team Captain Name"
                            onChange={this.handleChange}
                            value={this.state.captain}
                        />

                        <Form.Label>Enter the General Location of your Team
                        </Form.Label>
                        <Form.Control 
                            type="text"
                            name="teamLocation"
                            placeholder="Enter Your Team Location"
                            onChange={this.handleChange}
                            value={this.state.teamLocation}
                        />

                        <Form.File id="formcheck-api-regular">
                            <Form.File.Label>Upload a Picture for your team</Form.File.Label>
                            <Form.File.Input />
                        </Form.File>

                    <Button type="submit" value="Submit form!">Submit form!</Button>
                    </Form.Group>

                    
                </Form>
            </div>
        );
    }
}

export default teamCreate;
