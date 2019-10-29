import React, { Component } from "react";

export default class Change extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: props.changeObj.firstname,
      lastname: props.changeObj.lastname,
      age: props.changeObj.age,
      gender: props.changeObj.gender,
      city: props.changeObj.city,
      state: props.changeObj.state,
      number: props.changeObj.number,
      edit: false
    };
  }
  editItem() {
    this.setState({ edit: !this.state.edit });
    
  }
  handleFnChange(e) {
      console.log(e.target.value)
    this.setState({
      firstname: e.target.value
    });
  }
  handleLaChange(e) {
    this.setState({
      lastname: e.target.value
    });
  }
  handleAgeChange(e) {
    this.setState({
      age: e.target.value
    });
  }
  handleGenChange(e) {
    this.setState({
      gender: e.target.value
    });
  }
  handleCityChange(e) {
    this.setState({
      city: e.target.value
    });
  }
  handleStChange(e) {
    this.setState({
      state: e.target.value
    });
  }
  handleNumChange(e) {
    this.setState({
      number: e.target.value
    });
  }

  render() {
    return (
      <div className="change-outer">
      <div>
          <img className="robot" src={this.props.changeObj.image} alt="player"/>
        {this.state.edit ? (
          <input
            value={this.state.firstname}
            placeholder={this.props.changeObj.firstname}
            onChange={e => this.handleFnChange(e)}
          />
        ) : (
          <h3>{this.props.changeObj.firstname}</h3>
        )}
        {this.state.edit ? (
          <input
            value={this.state.lastname}
            placeholder={this.props.changeObj.lastname}
            onChange={e => this.handleLaChange(e)}
          />
        ) : (
          <h3>{this.props.changeObj.lastname}</h3>
        )}
        {this.state.edit ? (
          <input
            value={this.state.age}
            placeholder={this.props.changeObj.age}
            onChange={e => this.handleAgeChange(e)}
          />
        ) : (
          <h3>{this.props.changeObj.age}</h3>
        )}
        {this.state.edit ? (
          <input
            value={this.state.gender}
            placeholder={this.props.changeObj.gender}
            onChange={e => this.handleGenChange(e)}
          />
        ) : (
          <h3>{this.props.changeObj.gender}</h3>
        )}
        {this.state.edit ? (
          <input
            value={this.state.city}
            placeholder={this.props.changeObj.city}
            onChange={e => this.handleCityChange(e)}
          />
        ) : (
          <h3>{this.props.changeObj.city}</h3>
        )}
        {this.state.edit ? (
          <input
            value={this.state.state}
            placeholder={this.props.changeObj.state}
            onChange={e => this.handleStChange(e)}
          />
        ) : (
          <h3>{this.props.changeObj.state}</h3>
        )}
        {this.state.edit ? (
          <input
            value={this.state.number}
            placeholder={this.props.changeObj.number}
            onChange={e => this.handleNumChange(e)}
          />
        ) : (
          <h3>{this.props.changeObj.number}</h3>
        )}
        {this.state.edit ? (
          <button onClick={() => this.props.updatePlayerFn(this.props.changeObj.id,{      
              firstname: this.state.firstname,
            lastname: this.state.lastname,
            age: this.state.age,
            gender: this.state.gender,
            city: this.state.city,
            state: this.state.state,
            number: this.state.number})}>
                Submit</button>
        ) : (
          <button onClick={() => this.editItem()} type="edit">
            Make Changes 
          </button>
        )}
          <button onClick={() => this.props.deletePlayerFn(this.props.changeObj.id)}>
              Delete
            </button>
         </div> 
      </div>
    );
  }
}
