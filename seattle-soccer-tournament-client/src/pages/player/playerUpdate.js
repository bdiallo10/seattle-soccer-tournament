import React, { Component } from 'react';
import PlayerModel from '../../models/player'
// import PlayerModel from '../../models/player'


import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const playerurl =`http://localhost:5000/api/v1`;

class playerUpdate extends Component {
    constructor(props){
        super(props)
        this.state = {
            playerId: this.props.match.params.id,
            playerName: '',
            age: '',
            countryOfOrigin: '',
            playerLocation: '',
        }

        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount(){
       this.getPlayerDetails();
    }

    
    getPlayerDetails(){
        fetch(`${playerurl}/player/${this.props.match.params.id}`)
        .then(response => response.json())
        .then(response => {
            console.log(response.player)
            this.setState({
                playerName: response.player.playerName,
                age: response.player.age,
                countryOfOrigin: response.player.countryOfOrigin,
                playerLocation: response.player.playerLocation
            }, () => {
                console.log(this.state)
            })
        })
        .catch(err => console.log(err))
    }

    editPlayer(newPlayer){
        fetch.request({
            method: 'put',
            url: `${playerurl}/player/${this.state.id}`,
            body: newPlayer
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
    
    handleSubmit = (event) => {
        event.preventDefault();
        PlayerModel.update(this.state)
            .then(data => {
                this.props.history.push('/player')
            })
    }

    handleChange = (event) => {
      this.setState({
          [event.target.name]: event.target.value
      })
    }

    render(){
        return(
            <div className="createForm">
               <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="formTitle">
                        <Form.Label>Player Name</Form.Label>
                        <Form.Control
                            type="text"
                            name="playerName"
                            refs="playerName"
                            onChange={this.handleChange}
                            value={this.state.playerName}
                        />

                        <Form.Label>Player Age</Form.Label>
                        <Form.Control
                            type="text" 
                            name="age"
                            refs="age"
                            onChange={this.handleChange}
                            value={this.state.age}
                        />

                        <Form.Label>Place of Birth</Form.Label>
                        <Form.Control 
                            type="text"
                            name="countryOfOrigin"
                            refs="countryOfOrigin"
                            onChange={this.handleChange}
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