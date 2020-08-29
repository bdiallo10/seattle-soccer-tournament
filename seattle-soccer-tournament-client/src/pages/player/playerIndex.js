import React, { Component } from 'react';
import PlayerModel from '../../models/player'
import { Link } from 'react-router-dom'
import PlayerCard from '../../components/PlayerCard'

//importing bootstraps
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'


class PlayerIndex extends Component {
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
        console.log(this.props)
        let playerList = this.state.player.map((player, index) => {
            return (
                <Container fluid className="card">
                    <div>
                        <PlayerCard 
                        {...player} />
                    <Link to={`/player/${player._id}`} key={index}>
                        <Button>Visit Player Profile</Button>
                    </Link>
                    </div>
                </Container>
            )
        })
        return (
            <div>
                <h1>Here is a list of all the registered players</h1>
                <Link to={`/player/new`}>
                        {this.props.currentUser && 
                            <Button>New Player Registration</Button>
                        }
                </Link>
                <div className="card">
                    {this.state.player ? playerList: 'Loading...'}
                </div>
            </div>
        );
    }
}

export default PlayerIndex;
