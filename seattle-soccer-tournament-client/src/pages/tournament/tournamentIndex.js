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
            <div className="card">
                {this.state.tournament ? tournamentList: 'Loading...'}
            </div>
        );
    }
}

export default tournamentIndex;
