import React, { Component } from "react";
import axios from "axios";

export default class Playerinfo extends Component {
  constructor() {
    super();
    this.state = {
      firstname: "",
      lastname: "",
      age: "",
      gender: "",
      city: "",
      state: "",
      number: "",
    };
    this.submitPlayer = this.submitPlayer.bind(this)
  }
  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({[nam]: val});
  }
  submitPlayer(e) {
    axios.post("/api/players", this.state)
    .then(res => {console.log ('hit')
        
    });
  }
  render() {
      return (
          <div className = "playerinfo-outer">
            <img className="image-2" src="http://www.clker.com/cliparts/e/0/6/3/12550941262092997998Olympic_sports_Athletics_pictogram.svg.hi.png" alt="run"/>
            <img className="image-3" src="http://www.clipartpanda.com/clipart_images/sport-clip-art-vector-clip-5496335/download" alt="bb"/>
        <form className= "text-box" >
          
          <p>
            <input className= "input" type="text" 
            onChange={ this.myChangeHandler } name="firstname" placeholder="First Name"/>
          </p>
          <p>
            <input className= "input" type="text"  
            onChange={ this.myChangeHandler } name="lastname" placeholder="Last name"/>
          </p>
          <p>
            <input className= "input" type="text" 
            onChange={this.myChangeHandler} name="age" placeholder="Age"/>
          </p>
          <p>
            <input className= "input" type="text" 
            onChange={this.myChangeHandler} name="gender" placeholder="Gender" /> 
          </p>
          <p>
            <input className= "input" type="text" 
            onChange={ this.myChangeHandler } name="city" placeholder="City"/>
          </p>
          <p>
            <input className= "input" type="text" 
            onChange={ this.myChangeHandler } name="state" placeholder="State"/>
          </p>
          <p>
            <input className= "input" type="text" 
            onChange={ this.myChangeHandler } name="number" placeholder="###-###-####"/>
          </p>
          <input onClick={() => this.submitPlayer()} type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
