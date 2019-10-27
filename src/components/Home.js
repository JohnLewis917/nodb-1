import React, {Component}from 'react'
import { Redirect } from 'react-router-dom'

export default class Home extends Component {
    constructor(){
        super()
        this.state = {
            redirect: false
        }
        
    }
    setRedirect = () => {
        this.setState({
          redirect: true
        })
    }
    renderRedirect = () => {
        if (this.state.redirect) {
          return <Redirect to='/playerinfo'/>
        }
    }
    render(){
        return(
            <div className="home-outer">
                <img className="image-4" src="https://thumbs.dreamstime.com/b/athletics-symbols-25596909.jpg" alt="multi"/>
                <p className = "text">
                    Team Builder allows you to automatically build a sports team just by entering the players information. You can also add an image of the player. All information can be edited and players can be deleted if needed. 
                </p>
                <button onClick={this.setRedirect}className="home-button">Build A Team!</button>
                
            </div>
        )
    }
}