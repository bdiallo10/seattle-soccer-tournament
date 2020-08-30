import React from 'react';
import Table from 'react-bootstrap/Table'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

///create a form that add data to a table
// the table will have a two column, the first column is the name of the team, the second column is team location

const AddPlayer = () => {
    return (
        <div>
            <div className="createTeam">
                <h3>Add a Player to your Team</h3>
                <Form onSubmit="">
                    <Form.Group controlId="formTitle">
                        <Form.Control
                            type="text"
                            name="team"
                            placeholder="position"
                            onChange=""
                            value=""
                        />
                    </Form.Group>
                    <Form.Group controlId="formTitle">
                        <Form.Control
                            type="text"
                            name="team"
                            placeholder="name"
                            onChange=""
                            value=""
                        />
                    </Form.Group>
                    <Form.Group controlId="formTitle">
                        <Form.Control
                            type="text"
                            name="team"
                            placeholder="age"
                            onChange=""
                            value=""
                        />
                    </Form.Group>
                    <Form.Group controlId="formTitle">
                        <Form.Control
                            type="text"
                            name="team"
                            placeholder="Location"
                            onChange=""
                            value=""
                        />
                    </Form.Group>
                    <Button type="submit" value="Submit form!">Add Team!</Button>
                </Form>
            </div>
            <div className="table">
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>position</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Location</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>#</td>
                            <td>position</td>
                            <td>name</td>
                            <td>age</td>
                            <td>location</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
            <div className="table">
                <h3>Fixture and Results</h3>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Team Name</th>
                            <th>Team name</th>
                            <th>Score</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>#</td>
                            <td>name</td>
                            <td>name</td>
                            <td>Enter Score</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </div>
    );
}

export default AddPlayer;
