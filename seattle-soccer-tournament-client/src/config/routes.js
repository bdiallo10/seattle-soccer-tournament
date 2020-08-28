import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

// To home page
import Home from '../pages/Home'

// To tournament pages
import tournamentIndex from '../pages/tournament/tournamentIndex'
import tournamentShow from '../pages/tournament/tournamentShow'
import tournamentCreate from '../pages/tournament/tournamentCreate'
import tournamentUpdate from '../pages/tournament/tournamentUpdate'

// To Team pages
import teamIndex from '../pages/team/teamIndex'
import teamShow from '../pages/team/teamShow'
import teamCreate from '../pages/team/teamCreate'
import teamUpdate from '../pages/team/teamUpdate'

// To player pages
import playerIndex from '../pages/player/playerIndex'
import playerShow from '../pages/player/playerShow'
import playerCreate from '../pages/player/playerCreate'
import playerUpdate from '../pages/player/playerUpdate'

// Authorization
import Login from '../pages/Login'
import Profile from '../pages/Profile'
import Register from '../pages/Register'

export default (props) => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={ Home } />

            <Route exact path='/tournament' component={ tournamentIndex } />
            <Route  exact path='/tournament/new' component={ tournamentCreate } />
            <Route   path='/tournament/update/:id' component={ tournamentUpdate } />
            <Route   path='/tournament/:id' component={ tournamentShow } />
            
            <Route exact path='/team' component={ teamIndex } />
            <Route  exact path='/team/new' component={ teamCreate } />
            <Route   path='/team/update/:id' component={ teamUpdate } />
            <Route   path='/team/:id' component={ teamShow } />

            <Route exact path='/player' component={ playerIndex } />
            <Route exact path='/player/new' component={ playerCreate} />
            <Route  path='/player/update/:id' component={ playerUpdate } />
            <Route  path='/player/:id' component={ playerShow } />

            <Route exact path='/profile' component={ Profile } />
            <Route exact path='/register' component = { Register } />
            <Route exact path='/login' render={ (routeProps ) => {
                return <Login 
                    {...routeProps }
                    storeUser={ props.storeUser }
                />
            }}
            
            />
        </Switch>

    </BrowserRouter>
)
