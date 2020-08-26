import React, { Component } from 'react';
import PlayerModel from '../../models/player'
import PlayerCard from '../../components/PlayerCard'
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
            this.setState({ player: data.player})
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
                {/* <h1>Welcome to {this.state.currentPlayer} </h1> */}
                <PlayerCard {...this.state.player} />
                <button onClick={this.deletePlayer.bind(this)}>Delete</button>
                <button>Edit</button>
            </div>
        );
    }
}

export default playershow;
