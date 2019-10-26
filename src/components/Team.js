import React, {Component} from 'react'
import Playerinfo from './Playerinfo'
import axios from 'axios'

export default class Team extends Component {
    constructor() {
        super()
        this.state = {
            allPlayers: []
        }
    }
    componentDidMount(){
        axios.get('/api/playerinfo')
        .then(res => {
            this.setState({
                allPlayers: res.data
            })
        })
    }
    updatePlayers(id, body){
        axios.put
    }
}