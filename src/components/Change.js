import React, {Component} from 'react'

export default class Change extends Component {
    constructor(){
        super()
        this.state = {
            firstname: "",
            lastname: "",
            age: "",
            gender: "",
            city: "",
            state: "",
            number: "",
            edit: false
        };
    }
    editItem(){
        this.setState({edit: !this.state.edit})
        if(this.state.edit && this.state.firstname){
            this.props.updatePlayerFn(this.props.changeObj.id, {firstname: this.state.firstname})
        }else if( this.state.edit && this.state.lastname){
            this.props.updatePlayerFn(this.props.changeObj.id, {lastname: this.state.lastname})
        }else if(this.state.edit && this.state.age){
            this.props.updatePlayerFn(this.props.chaneObj.id, {age: this.state.age})
        }else if(this.state.edit && this.state.gender){
            this.props.updatePlayerFn(this.props.chaneObj.id, {gender: this.state.gender})
        }else if(this.state.edit && this.state.city){
            this.props.updatePlayerFn(this.props.chaneObj.id, {city: this.state.city})
        }else if(this.state.edit && this.state.state){
            this.props.updatePlayerFn(this.props.chaneObj.id, {state: this.state.state})
        }else if(this.state.edit && this.state.number){
            this.props.updatePlayerFn(this.props.chaneObj.id, {number: this.state.number})
        }
    }
    handleChange(e){
        this.setState({
            firstname: e.target.value
        })
    }
    handleChange(e){
        this.setState({
            lastname: e.target.value
        })
    }
    handleChange(e){
        this.setState({
            age: e.target.value
        })
    }
    handleChange(e){
        this.setState({
            gender: e.target.value
        })
    }
    handleChange(e){
        this.setState({
            city: e.target.value  
        })
    }
    handleChange(e){
        this.setState({
            state: e.target.value
        })
    }
    handleChange(e){
        this.setState({
            number: e.target.value
        })
    }

    render(){
        return(
            <div>
                {this.state.editItem ?
                <input placeholder={this.props.changeObj.firstname}
                onChange={e => this.handleChange(e)} /> : null}
                {this.state.editItem ?
                <input placeholder={this.props.changeObj.lastname}
                onChange={e => this.handleChange(e)} /> : null}
                {this.state.editItem ?
                <input placeholder={this.props.changeObj.age}
                onChange={e => this.handleChange(e)} /> : null}
                {this.state.editItem ?
                <input placeholder={this.props.changeObj.gender}
                onChange={e => this.handleChange(e)} /> : null}
                {this.state.editItem ?
                <input placeholder={this.props.changeObj.city}
                onChange={e => this.handleChange(e)} /> : null}
                {this.state.editItem ?
                <input placeholder={this.props.changeObj.state}
                onChange={e => this.handleChange(e)} /> : null}
                {this.state.editItem ?
                <input placeholder={this.props.changeObj.number}
                onChange={e => this.handleChange(e)} /> : null}
            </div>
        )
    }

}