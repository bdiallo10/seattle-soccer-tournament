import React, { Component } from 'react';
import TournamentModel from '../../models/tournament'

//bootstrap import statement
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const tournamenturl =`http://localhost:5000/api/v1`

class tournamentUpdate extends Component {
    constructor(props){
        super(props)
        this.state = {
            tournamentId: this.props.match.params.id,
            title: '',
            administrator: '',
            date: '',
            location: '',
        }
        // this.handleInputChange = this.handleInputChange.bind(this)
    }

    componentWillMount(){
        this.getTournamentDetails()
    }

    getTournamentDetails(){
        return fetch(`${tournamenturl}/team/${this.state.tournamentId}`)
        .then(response => {
            this.setState({
                title: response.data.title,
                administrator: response.data.administrator,
                date: response.data.date,
                location: response.data.location,
            }, () => {
                console.log(this.state)
            })
        })
        .catch(err => console.log(err))
    }

    editTournament(newTournament){
        fetch.request({
            method: 'PUT',
            url: `${tournamenturl}/tournament/${this.state.tournamentId}`,
            data: newTournament
        })
        .then(response => {
            this.props.history.push('/')
        })
        .catch(err => console.log(err))
    }
    onSubmit(e){
        e.preventDefault()
        const newTournament = {
            title: this.refs.title.value,
            administrator: this.refs.administrator.value,
            date: this.refs.date.value,
            location: this.refs.location.value,
        }
        this.editTournament(newTournament)
    }

    handleSubmit = (event) => {
        event.preventDefault();
        TournamentModel.PUT(this.state)
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
                            refs="title"
                            placeholder="Enter the title of your tournament"
                            onChange={this.handleChange}
                            value={this.state.title}
                        />

                        <Form.Label>Tournament Administrator</Form.Label>
                        <Form.Control 
                            type="text"
                            name="administrator"
                            refs="administrator"
                            placeholder="Enter the Name of the Tournament Administrator"
                            onChange={this.handleChange}
                            value={this.state.administrator}
                        />

                        <Form.Label>Enter the Start Date Tournament</Form.Label>
                        <Form.Control 
                            type="text"
                            name="date"
                            refs="date"
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
                            refs="location"
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

export default tournamentUpdate;
