import React, { Component } from 'react';
import TournamentModel from '../../models/tournament'
import TournamentCard from '../../components/TournamentCard'

//importing bootstrap
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'

const tournamenturl =`http://localhost:5000/api/v1`


class tournamentShow extends Component {
    state = {
        tournament: {},
        currentTournament: this.props.match.params.id
        
    }

    componentDidMount() {
        this.fetchData()
    }

    fetchData = () => {
        TournamentModel.show(this.state.currentTournament).then(data => {
            this.setState({ 
                tournament: data.tournament,
                title: data.title
            })
        })
    }

    deleteTournament() {
        if(window.confirm("Are you sure you want to delete this tournament?"))
        {
            return fetch(`${tournamenturl}/tournament/${this.state.currentTournament}`, {
                method: "DELETE",
    
            })
            .then(() => {
                window.confirm('The tournament was successfully deleted')
                this.props.history.push('/tournament')
            })
        }
    }

    render() {
        return (
            <div className="individualTeam">
                <h1>Welcome to {this.state.title} page</h1>
                <div>
                    <TournamentCard {...this.state.tournament} />
                    <Container>
                        <Button onClick={this.deleteTournament.bind(this)}>Delete</Button>
                        <Button onClick={() => this.props.history.push(`/tournament/update/${this.props.match.params.id}`)}>Edit</Button>
                    </Container>
                </div>
            </div>
        );
    }
}

export default tournamentShow;
