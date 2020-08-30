import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

// To home page
import Home from '../pages/Home'

// To tournament pages
import TournamentIndex from '../pages/tournament/tournamentIndex' // good
import TournamentShow from '../pages/tournament/tournamentShow'
import tournamentCreate from '../pages/tournament/tournamentCreate' // good
import tournamentUpdate from '../pages/tournament/tournamentUpdate' // good

// To Team pages
import TeamIndex from '../pages/team/teamIndex' // good
import TeamShow from '../pages/team/teamShow' 
import teamCreate from '../pages/team/teamCreate' // good
import teamUpdate from '../pages/team/teamUpdate' // good

// To player pages
import PlayerIndex from '../pages/player/playerIndex' // good
import PlayerShow from '../pages/player/playerShow'
import playerCreate from '../pages/player/playerCreate' // good
import playerUpdate from '../pages/player/playerUpdate' // good

// Authorization
import Login from '../pages/Login' // good
import Profile from '../pages/Profile' // good
import Register from '../pages/Register' // good

export default (props) => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={ Home } />

            <Route exact path='/tournament' render={ () => (
                <TournamentIndex 
                {...props}
                />
            )
            } />
            <Route  exact path='/tournament/new' component={ tournamentCreate } />
            <Route   path='/tournament/update/:id' component={ tournamentUpdate } />
            <Route   path='/tournament/:id' render={ (props) => (
                <TournamentShow
                {...props}
                />
            )
            } />
            
            <Route exact path='/team' render={ () => (
                 <TeamIndex 
                 {...props } 
                 />
            ) 
            } />
            <Route  exact path='/team/new' component={ teamCreate } />
            <Route   path='/team/update/:id' component={ teamUpdate } />
            <Route   path='/team/:id' render={ (props) => (
                <TeamShow 
                {...props}
                />
            )
            } />


            <Route exact path='/player' render={ () => (
                <PlayerIndex 
                {...props}
                />
            )
            } />
            <Route exact path='/player/new' component={ playerCreate} />
            <Route  path='/player/update/:id' component={ playerUpdate } />
            <Route  path='/player/:id' render={ (props) => (
                <PlayerShow
                {...props}
                />
            )
            } />


            <Route exact path='/profile' component={ Profile } />
            <Route exact path='/register' component = { Register } />
            <Route exact path='/login' render={ (routeProps ) => {
                return <Login 
                    {...routeProps }
                    storeUser={ props.storeUser }
                />
            }}
            />
            <Route exact path='/logout' component= { Home } />
        </Switch>

    </BrowserRouter>
)
