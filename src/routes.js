import React from 'react'
import Playerinfo from './components/Playerinfo'
import Team from './components/Team'
import Home from './components/Home'
import {Switch, Route} from 'react-router-dom'

export default (
    <Switch>
        <Route exact path='/' component = {Home}/>
        <Route path='/team' component = {Team}/>
        <Route path='/Playerinfo' component = {Playerinfo}/>
    </Switch>
)