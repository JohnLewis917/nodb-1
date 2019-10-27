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
  }
  submitPlayer() {
    axios.post("/api/players", this.state)
    .then(res => {console.log (res)
        this.props.history.push('/')
    });
  }
  render() {
      return (
          <div className = "playerinfo-outer">
            <img className="image-2" src="http://www.clker.com/cliparts/e/0/6/3/12550941262092997998Olympic_sports_Athletics_pictogram.svg.hi.png" alt="run"/>
            <img className="image-3" src="http://www.clipartpanda.com/clipart_images/sport-clip-art-vector-clip-5496335/download" alt="bb"/>
        <form className= "text-box" action="/controllers/controller">
          
          <p>
            <input className= "input" type="text" name="firstname" placeholder="First Name"/>
          </p>
          <p>
            <input className= "input" type="text" name="lastname" placeholder="Last name"/>
          </p>
          <p>
            <input className= "input" type="number" name="age" placeholder="Age"/>
          </p>
          <p>
            <input className= "input" type="text" name="gender" placeholder="Gender" /> 
          </p>
          <p>
            <input className= "input" type="text" name="city" placeholder="City"/>
          </p>
          <p>
            <input className= "input" type="text" name="state" placeholder="State"/>
          </p>
          <p>
            <input className= "input" type="text" name="number" placeholder="###-###-####"/>
          </p>
          <input onClick={() => this.submitPlayer()} type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
