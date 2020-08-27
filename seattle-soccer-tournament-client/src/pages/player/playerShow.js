import React, { Component } from 'react';
import PlayerModel from '../../models/player'
import PlayerCard from '../../components/PlayerCard'

//bootstraps
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/esm/Col';


const playerurl =`http://localhost:5000/api/v1`



class playershow extends Component {
    state = {
        player: {},
        currentPlayer: this.props.match.params.id
    }

    componentDidMount() {
        this.fetchData()
    }

    fetchData = () => {
        PlayerModel.show(this.state.currentPlayer).then(data => {
            this.setState({ 
                player: data.player,
                name: data.player.playerName
            })
        })
    }

    deletePlayer(playerId) {
        if(window.confirm('Are you sure you want to delete this player?'))
        {
            return fetch(`${playerurl}/player/${this.state.currentPlayer}`, {
                method: "DELETE",
    
            })
            .then(() => {
                window.confirm('The player was successfully deleted')
                this.props.history.push('/player')
            })
        }
    }

    render() {
        return (
            <div className="individualPlayer">
                <h1>Hello I am {this.state.name}</h1>
                <di>
                    <PlayerCard {...this.state.player} />
                    <Container fluid inline>
                            <Button onClick={this.deletePlayer.bind(this)}>Delete</Button>
                            <Button onClick={() => this.props.history.push('/player/update/:id')}>Edit</Button>
                    </Container>
                </di>
            </div>
        );
    }
}

export default playershow;
