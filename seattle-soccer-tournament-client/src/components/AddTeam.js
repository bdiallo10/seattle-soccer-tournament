import React from 'react';
import Table from 'react-bootstrap/Table'

///create a form that add data to a table
// the table will have a two column, the first column is the name of the team, the second column is team location

const AddTeam = () => {
    return (
        <div>
            <div className="form">

            </div>
            <div className="table">
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Team Name</th>
                            <th>Team Location</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>#</td>
                            <td>{teamname}</td>
                            <td>{teamlocation}</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </div>
    );
}

export default AddTeam;
