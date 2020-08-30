import React, { Component } from 'react';
import TeamModel from '../../models/team'
import TeamCard from '../../components/TeamCard'
import AddPlayer from '../../components/AddPlayer'


//bootstraps
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'

const teamurl =`http://localhost:5000/api/v1`

class TeamShow extends Component {
    state = {
        team: {},
        currentTeam: this.props.match.params.id
    }

    componentDidMount() {
        this.fetchData()
    }

    fetchData = () => {
        TeamModel.show(this.state.currentTeam).then(data => {
            this.setState({ 
                team: data.team,
                teamName: data.teamName
            })
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
                <div>
                    <h1>Welcome to {this.state.team.teamName}</h1>
                </div>
                <div>
                    <TeamCard {...this.state.team} />
                    {/* {this.props.currentUser &&   */}
                        <Container>
                            <Button onClick={this.deleteTeam.bind(this)}>Delete</Button>
                            <Button onClick={() => this.props.history.push(`/team/update/${this.props.match.params.id}`)}>Edit</Button>
                        </Container>
                    {/* } */}
                </div>
                <div>
                    <AddPlayer />
                </div>
            </div>
        );
    }
}

export default TeamShow;
