import React, {Component} from 'react'
import Playerinfo from './Playerinfo'
import Change from './Change'
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
        axios.put(`/api/change/${id}`, body)
        .then(res => {
            this.setState({
                allPlayers: res.data
            })
        })
    }
    deletePlayer(id){
        axios.delete(`/api/change/${id}`)
        .then(res => {
            this.setState({
                allPlayers: res.data 
            })
        })
    }

    render() {
        return (
            <div className="team">
                
                {this.state.allPlayers.map(el => (
                <Change changeObj={el} key={el.id}
                updatePlayerFn={this.updatePlayer}
                deletePlayerFn={this.deletePlayer}/>
                ))}
                <button onClick={() => this.editPlayer()}>Edit</button>
                <button onClick={() => this.props.deletePlayer(this.props.pokemonObj.id)}>Delete</button>
            </div>
        )
    }
}