import React, { Component } from 'react';

class MyForm extends Component {
  constructor (props) {
    super(props);
    this.state = {
      name: '',
      color: 'blue'
    };
  }
  
  update_state (event, key) {
    console.log(event.target.value);
    console.log(event.target);
    //this.setState({[key]: event.target.value});
    var new_state = {};
    new_state[key] = event.target.value;
    this.setState(new_state);
  }
  
  handleSubmit (event) {
    console.log('submitted:', this.state);
    event.preventDefault();
  }
  
  render () {
    return (
      <form onSubmit={event => this.handleSubmit(event)}>
        <label>Your Name</label>
        <input type="text" value={this.state.name} onChange={event => this.update_state(event, 'name')}/>
        <br/><br/>
        <select value={this.state.color} onChange={event => this.update_state(event, 'color')}>
          <option value="red">Red</option>
          <option value="blue">Blue</option>
        </select>
        <br/><br/>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default MyForm
