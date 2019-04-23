// Code ControlledInput Component Here


import React, {Component} from 'react';

class ControlledInput extends Component {
  constructor(props){
    super(props)
    this.state = {
      firstName: '',
      lastName: ''
    }
  }

  handleChange = (event)=>{
    this.setState({
      [event.target.name]: event.target.value
    },()=>{console.log(this.state)})
  }


  render(){
    return(
      <div>
        <form>
          <label>FirstName</label>
          <input type="text" name="firstName" value={this.state.firstName} onChange={this.handleChange}></input>

          <label>LastName</label>
          <input type="text" name="lastName" value={this.state.lastName} onChange={this.handleChange}></input>
        </form>

      </div>
    )
  }
}

export default ControlledInput;
