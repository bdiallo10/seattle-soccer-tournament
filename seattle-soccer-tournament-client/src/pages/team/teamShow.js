import React, { Component } from 'react';
import TeamModel from '../../models/team'
import TeamCard from '../../components/TeamCard'
const teamurl =`http://localhost:5000/api/v1`


class teamShow extends Component {
    state = {
        team: {},
        currentTeam: this.props.match.params.id
    }

    componentDidMount() {
        this.fetchData()
    }

    fetchData = () => {
        TeamModel.show(this.state.currentTeam).then(data => {
            this.setState({ team: data.team })
        })
    }

    deleteTeam(){
        if(window.confirm('Are you sure you want to delete this team?'))
        {
            return fetch(`${teamurl}/team/${this.state.currentTeam}`, {
                method: "DELETE",
    
            })
            .then(() => {
                window.confirm('The team was successfully deleted')
                this.props.history.push('/team')
            })
        }
    }

    render() {
        return (
            <div className="individualTeam">
                <TeamCard {...this.state.team} />
                <button onClick={this.deleteTeam.bind(this)}>Delete</button>
                <button>Edit</button>
            </div>
        );
    }
}

export default teamShow;
