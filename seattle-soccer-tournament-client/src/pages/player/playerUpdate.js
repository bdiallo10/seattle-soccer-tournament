import React, { Component } from 'react';
// import PlayerModel from '../../models/player'
import axios from 'axios';


import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const playerurl =`http://localhost:5000/api/v1`;

class playerUpdate extends Component {
    constructor(props){
        super(props)
        this.state = {
            // id: '',
            playerName: '',
            age: '',
            countryOfOrigin: '',
            playerLocation: '',
        }

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    componentWillMount(){
       this.getPlayerDetails();
    }

    
    getPlayerDetails(){
        let playerId = this.props.match.params.id
        axios.get(`${playerurl}/player/${this.state.playerId}`)
        .then(response => {
            this.setState({
                // id: response.data.id,
                playerName: response.data.playerName,
                age: response.data.age,
                countryOfOrigin: response.data.countryOfOrigin,
                playerLocation: response.data.playerLocation
            }, () => {
                console.log(this.state)
            })
        })
        .catch(err => console.log(err))
    }

    editPlayer(newPlayer){
        axios.request({
            method: 'put',
            url: `${playerurl}/player/${this.state.id}`,
            data: newPlayer
        }).then(response => {
            this.props.history.push('/')
        }).catch(err => console.log(err))
    }
    
    onSubmit(e){
        e.preventDefault()
        const newPlayer = {
            playerName: this.refs.playerName,
            age: this.refs.age,
            countryOfOrigin: this.refs.countryOfOrigin,
            playerLocation: this.refs.playerLocation,

        }
        this.editPlayer(newPlayer)
    }
    

    handleInputChange = (e) => {
        const target = e.target
        const value = target.value
        const name = target.name

        this.setState({
            [name]: value
        })
    }

    render(){
        return(
            <div className="createForm">
               <Form onSubmit={this.onSubmit.bind(this)}>
                    <Form.Group controlId="formTitle">
                        <Form.Label>Player Name</Form.Label>
                        <Form.Control
                            type="text"
                            name="playerName"
                            refs="playerName"
                            onChange={this.handleInputChange}
                            value={this.state.playerName}
                        />

                        <Form.Label>Player Age</Form.Label>
                        <Form.Control
                            type="text" 
                            name="age"
                            refs="age"
                            onChange={this.handleInputChange}
                            value={this.state.age}
                        />

                        <Form.Label>Place of Birth</Form.Label>
                        <Form.Control 
                            type="text"
                            name="countryOfOrigin"
                            refs="countryOfOrigin"
                            onChange={this.handleInputChange}
                            value={this.state.countryOfOrigin}
                        />

                        <Form.Label>Where do you currently live?
                        </Form.Label>
                        <Form.Control 
                            type="name"
                            name="playerLocation"
                            refs="playerLocation"
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

export default playerUpdate;