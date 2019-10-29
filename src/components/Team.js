import React, {Component} from 'react'
import Change from './Change'
import axios from 'axios'

export default class Team extends Component {
    constructor() {
        super()
        this.state = {
            allPlayers: []
        }
        this.updatePlayer = this.updatePlayer.bind(this)
        this.deletePlayer = this.deletePlayer.bind(this)
    }
    componentDidMount(){
        axios.get('/api/players')
        .then(res => {
            console.log(res, 'hit')
            this.setState({
                allPlayers: res.data
            })
        })
        
    }
    updatePlayer(id, body){
        axios.put(`/api/players/${id}`, body)
        .then(res => {
            console.log(res.data);
            
            this.setState({
                allPlayers: res.data
            })
        })
    }
    deletePlayer(id){
        axios.delete(`/api/players/${id}`)
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
                
                
            </div>
        )
    }
}