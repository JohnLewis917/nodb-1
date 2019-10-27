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
        axios.get('/api/players')
        .then(res => {
            console.log(res)
            this.setState({
                players: res.data
            })
        })
    }
    updatePlayers(id, body){
        axios.put(`/api/players/${id}`, body)
        .then(res => {
            this.setState({
                players: res.data
            })
        })
    }
    deletePlayer(id){
        axios.delete(`/api/players/${id}`)
        .then(res => {
            this.setState({
                players: res.data 
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