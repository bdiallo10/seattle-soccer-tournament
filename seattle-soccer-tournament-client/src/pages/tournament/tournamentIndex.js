import React, { Component } from 'react';
import TournamentModel from '../../models/tournament'
import { Link } from 'react-router-dom'
import TournamentCard from '../../components/TournamentCard'

//bootstrap imports
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/esm/Button';

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
                <Container fluid className="card">
                    <div>
                        <TournamentCard 
                        {...tournament} />
                    <Link to={`/tournament/${tournament._id}`} key={index}>
                        <Button>Visit Tournament Page</Button>
                    </Link>
                    </div>
                </Container>
            )
        })
        return (
            <div>
                <h1>Here is a list of all the tournament</h1>
                    <Link to={`/tournament/new`}>
                            <Button>Start A Tournament</Button>
                    </Link>
                <div className="card">
                    {this.state.tournament ? tournamentList: 'Loading...'}
                </div>
            </div>
        );
    }
}

export default tournamentIndex;
