import React, { Component } from 'react';
import TournamentModel from '../../models/tournament'
import { Link } from 'react-router-dom'
import TournamentCard from '../../components/TournamentCard'

//bootstrap imports
import Container from 'react-bootstrap/Container'

class tournamentIndex extends Component {
    state = {
        tournament: []
    }

    componentDidMount() {
        this.fetchData()
    }

    fetchData = () => {
        TournamentModel.all().then(data => {
            this.setState({ tournament: data.tournament })
        })
    }
    render() {
        let tournamentList = this.state.tournament.map((tournament, index) => {
            return (
                <Link to={`/tournament/${tournament._id}`} key={index}>
                    <TournamentCard {...tournament} />
                </Link>
            )
        })
        return (
            <Container fluid className="card">
                {this.state.tournament ? tournamentList: 'Loading...'}
            </Container>
        );
    }
}

export default tournamentIndex;
