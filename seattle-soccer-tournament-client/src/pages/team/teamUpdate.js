import React, { Component } from 'react';
import TeamModel from '../../models/team'

//bootstrap import statement
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const teamurl =`http://localhost:5000/api/v1`

class teamUpdate extends Component {
    constructor(props){
        super(props)
        this.state = {
            teamId: this.props.match.params.id,
            teamName: '',
            manager: '',
            captain: '',
            teamLocation: '',
        }
        
        this.handleChange = this.handleChange.bind(this)
    }

    componentDidMount(){
        this.getTeamDetails()
    }

    getTeamDetails(){
        fetch(`${teamurl}/team/${this.props.match.params.id}`)
        .then(response => response.json())
        .then(response => {
            console.log(response.team)
            this.setState({
                teamName: response.team.teamName,
                manager: response.team.manager,
                captain: response.team.captain,
                teamLocation: response.team.teamLocation,
            }, () => {
                console.log(this.state)
            })
        })
        .catch(err => console.log(err))
    }

    editTeam(newTeam){
        fetch.request({
            method: 'put',
            url: `${teamurl}/team/${this.state.id}`,
            body: newTeam
        })
        .then(response => {
            this.props.history.push('/')
        })
        .catch(err => console.log(err))
    }
    onSubmit(e){
        e.preventDefault()
        const newTeam = {
            teamName: this.refs.teamName,
            manager: this.refs.manager,
            captain: this.refs.captain,
            teamLocation: this.refs.teamLocation,
        }
        this.editTeam(newTeam)
    }

    handleSubmit = (event) => {
        event.preventDefault();
        TeamModel.update(this.state)
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
                            refs="teamName"
                            onChange={this.handleChange}
                            value={this.state.teamName}
                        />

                        <Form.Label>Team Manager</Form.Label>
                        <Form.Control 
                            type="text"
                            name="manager"
                            refs="manager"
                            onChange={this.handleChange}
                            value={this.state.manager}
                        />

                        <Form.Label>Team Captain</Form.Label>
                        <Form.Control
                            type="text" 
                            name="captain"
                            refs="captain"
                            onChange={this.handleChange}
                            value={this.state.captain}
                        />

                        <Form.Label>Enter the General Location of your Team
                        </Form.Label>
                        <Form.Control 
                            type="text"
                            name="teamLocation"
                            refs="teamLocation"
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

export default teamUpdate;
