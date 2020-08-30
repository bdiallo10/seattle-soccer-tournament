import React, { Component } from 'react';
import PlayerModel from '../../models/player'
import PlayerCard from '../../components/PlayerCard'

//bootstraps
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/esm/Col';


const playerurl =`http://localhost:5000/api/v1`



class PlayerShow extends Component {
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
                playerName: data.playerName
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
                <div>
                    <h1>Welcome to my profile</h1>
                </div>
                <div>
                    <PlayerCard
                    {...this.state.player} />
                    {/* {this.props.currentUser &&  */}
                        <Container fluid inline>
                            <Button onClick={this.deletePlayer.bind(this)}>Delete</Button>
                            <Button onClick={() => this.props.history.push(`/player/update/${this.props.match.params.id}`)}>Edit</Button>
                        </Container>
                    {/* } */}
                </div>
            </div>
        );
    }
}

export default PlayerShow;
