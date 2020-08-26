import React, { Component } from 'react';
import TournamentModel from '../../models/tournament'
import TournamentCard from '../../components/TournamentCard'
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
            this.setState({ tournament: data.tournament})
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
                <TournamentCard {...this.state.tournament} />
                <button onClick={this.deleteTournament.bind(this)}>Delete</button>
                <button>Edit</button>
            </div>
        );
    }
}

export default tournamentShow;
