import React from 'react';
import Table from 'react-bootstrap/Table'

///create a form that add data to a table
// the table will have a two column, the first column is the name of the team, the second column is team location

const AddPlayer = () => {
    return (
        <div>
            <div className="form">

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
                            <td>{position}</td>
                            <td>{name}</td>
                            <td>{age}</td>
                            <td>{location}</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </div>
    );
}

export default AddPlayer;
