import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

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

export default () => (
    <BrowserRouter>
        <div>
            <Route exact path='/' component={ Home } />

            <Route exact path='/tournament' component={ tournamentShow } />
            <Route  path='/tournament/:id' component={ tournamentIndex } />
            <Route  path='/tournament/new' component={ tournamentCreate } />
            <Route  path='/tournament/update' component={ tournamentUpdate } />
            
            <Route exact path='/team' component={ teamShow } />
            <Route  path='/team/:id' component={ teamIndex } />
            <Route  path='/team/new' component={ teamCreate } />
            <Route  path='/team/update' component={ teamUpdate } />

            <Route exact path='/player' component={ playerShow } />
            <Route  path='/player/:id' component={ playerIndex } />
            <Route  path='/player/new' component={ playerCreate} />
            <Route  path='/player/update' component={ playerUpdate } />
        </div>

    </BrowserRouter>
)
