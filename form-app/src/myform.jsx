import React, { Component } from 'react';

import {Card, CardActions, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

import './myform.css';

import database, {User} from './fsociety';

import { addContact } from './actions';
import { connect } from 'react-redux';

class MyForm extends Component {
  constructor (props) {
    super(props);
    this.state = {
      name: '',
      color: 'blue'
    };
    
    this.history = props.history;
  }
  
  update_state (event, key) {
    console.log(event.target.value);
    console.log(event.target);
    //this.setState({[key]: event.target.value});
    var new_state = {};
    new_state[key] = event.target.value;
    this.setState(new_state);
  }
  
  update_select = (event, index, value) => {
    this.setState({color: value});
  }
  
  handleSubmit (event) {
    console.log('submitted:', this.state);
    //database.ref('contacts/' + User.user.uid).set({
    //  paul: {name: "Paul B"},
    //  jim: {name: "Jim"},
    //});
    event.preventDefault();
    //this.history.push('/');
    
    this.props.onSubmit(this.state.name, this.state);
  }
  
  render () {
    return (
      <div>
        <form onSubmit={event => this.handleSubmit(event)}>
          <Card className="md-card">
            <CardTitle title="My Form"/>
            <CardText>
              <TextField floatingLabelText="Your Name"
              defaultValue={this.state.name}
              onChange={event => this.update_state(event, 'name')}/>
              <br/><br/>
              <SelectField
                floatingLabelText="Color"
                value={this.state.color}
                onChange={this.update_select}>
                <MenuItem value="red" primaryText="Red"/>
                <MenuItem value="blue" primaryText="Blue"/>
              </SelectField>
            </CardText>
            <CardActions>
              <RaisedButton type="submit" label="Submit" primary={true}/>
            </CardActions>
          </Card>
        </form>
        {Object.keys(this.props.contacts).map((key) => {
          return <div key={key}>
            Key: {key}, Value: {this.props.contacts[key].name}
          </div>;
        })}
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {contacts: state};
}

function mapDispatchToProps (dispatch) {
  return {
    onSubmit: function (id, data) {
      dispatch(addContact(id, data));
    }
  }
}

MyForm = connect(
  mapStateToProps, mapDispatchToProps
)(MyForm);

export default MyForm
