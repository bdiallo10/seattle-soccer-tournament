import React, { Component } from 'react';
import PlayerModel from '../../models/player'
import { Link } from 'react-router-dom'
import PlayerCard from '../../components/PlayerCard'

//importing bootstraps
import Container from 'react-bootstrap/Container'


class playerIndex extends Component {
    state = {
        player: []
    }

    componentDidMount() {
        this.fetchData()
    }


    fetchData = () => {
        PlayerModel.all().then(data => {
            this.setState({ player: data.player })
        })
    }

    render() {
        let playerList = this.state.player.map((player, index) => {
            return (
                <div>
                    <Link to={`/player/${player._id}`} key={index}>
                        <PlayerCard {...player} />
                    </Link>
                </div>
            )
        })
        return (
            <Container className="card">
                {this.state.player ? playerList: 'Loading...'}
            </Container>
        );
    }
}

export default playerIndex;
