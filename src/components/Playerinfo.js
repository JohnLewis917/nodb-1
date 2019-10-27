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
    axios.post("/api/, this.state)
    .then(res => {
        this.props.history.push('/team')
    });
  }
  render() {
      return (
          <div className = "playerinfo-outer">
          {/* <img className = "image"
            src={`https://robohash.org/player.png`}
            width="125"
            height="125"
            alt=""
          /> */}
        <form>
          
          <p>
            <input type="text" name="firstname" placeholder="First Name"/>
          </p>
          <p>
            <input type="text" name="lastname" placeholder="Last name"/>
          </p>
          <p>
            <input type="number" name="age" placeholder="Age"/>
          </p>
          <p>
            <input type="text" name="gender" placeholder="Gender" /> 
          </p>
          <p>
            <input type="text" name="city" placeholder="City"/>
          </p>
          <p>
            <input type="text" name="state" placeholder="State"/>
          </p>
          <p>
            <input type="text" name="number" placeholder="###-###-####"/>
          </p>
          <input onClick={() => this.submitPlayer()} type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
