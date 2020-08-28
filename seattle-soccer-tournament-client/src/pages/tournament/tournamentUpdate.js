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
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount(){
        this.getTournamentDetails()
    }

    getTournamentDetails(){
        fetch(`${tournamenturl}/tournament/${this.props.match.params.id}`)
        .then(response => response.json())
        .then(response => {
            console.log(response.tournament)
            this.setState({
                title: response.tournament.title,
                administrator: response.tournament.administrator,
                date: response.tournament.date,
                location: response.tournament.location,
            }, () => {
                console.log(this.state)
            })
        })
        .catch(err => console.log(err))
    }

    editTournament(newTournament){
        fetch.request({
            method: 'put',
            url: `${tournamenturl}/tournament/${this.state.id}`,
            body: newTournament
        })
        .then(response => {
            this.props.history.push('/')
        })
        .catch(err => console.log(err))
    }
    onSubmit(e){
        e.preventDefault()
        const newTournament = {
            title: this.refs.title,
            administrator: this.refs.administrator,
            date: this.refs.date,
            location: this.refs.location,
        }
        this.editTournament(newTournament)
    }

    handleSubmit = (event) => {
        event.preventDefault();
        TournamentModel.update(this.state)
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
                            onChange={this.handleChange}
                            value={this.state.title}
                        />

                        <Form.Label>Tournament Administrator</Form.Label>
                        <Form.Control 
                            type="text"
                            name="administrator"
                            refs="administrator"
                            onChange={this.handleChange}
                            value={this.state.administrator}
                        />

                        <Form.Label>Enter the Start Date Tournament</Form.Label>
                        <Form.Control 
                            type="text"
                            name="date"
                            refs="date"
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
