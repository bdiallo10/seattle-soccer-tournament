import React, { Component } from 'react';
import TeamModel from '../../models/team'
import { Link } from 'react-router-dom'
import TeamCard from '../../components/TeamCard'

//bootstrap imports
import Container from 'react-bootstrap/Container'
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
                <div>
                    <h1>Here is a list of all the tournament</h1>
                    <Link to={`/team/${team._id}`} key={index} >
                        <TeamCard {...team} />
                    </Link>
                </div>
            )
        })
        return(
            <Container fluid className="card">
                {this.state.team ? teamList: 'Loading...'}
            </Container>
        )
    }
}

export default teamIndex;
