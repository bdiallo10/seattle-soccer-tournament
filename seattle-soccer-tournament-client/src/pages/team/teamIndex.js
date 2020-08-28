import React, { Component } from 'react';
import TeamModel from '../../models/team'
import { Link } from 'react-router-dom'
import TeamCard from '../../components/TeamCard'

//bootstrap imports
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class teamIndex extends Component {
    state = {
        team: []
    }

    componentDidMount() {
        this.fetchData()
    }

    fetchData = () => {
        TeamModel.all().then(data => {
            this.setState({ team: data.team})
        })
    }


    render() {
        let teamList = this.state.team.map((team, index) => {
            return(
                <Container fluid className="card">
                    <div>
                        <TeamCard {...team} />
                    <Link to={`/team/${team._id}`} key={index} >
                        <Button>Visit Team Profile</Button>
                    </Link>
                    </div>
                </Container>
            )
        })
        return(
            <div>
                <h1>Here is a list of all the registered team</h1>
                <Link to={`/team/new`}>
                        <Button>New Team Registration</Button>
                </Link>
                <div className="card">
                    {this.state.team ? teamList: 'Loading...'}
                </div>
            </div>
        )
    }
}

export default teamIndex;
