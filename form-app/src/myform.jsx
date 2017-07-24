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

export class MyForm extends Component {
  constructor (props) {
    super(props);
    this.state = {
      name: '',
      color: 'blue'
    };
    
    this.history = props.history;
    console.log(this.props);
    if (this.props.edit_id) {
      this.title = "Edit Contact";
      this.read_data();
    } else {
      this.title = "Add Contact";
    }
  }
  
  read_data () {
    if (this.props.contacts[this.props.edit_id]) {
      console.log('DATA AQUIRED', this.props.contacts[this.props.edit_id]);
      this.state = this.props.contacts[this.props.edit_id];
      this.setState(this.state);
    } else {
      setTimeout(() => {
        this.read_data();
      }, 100);
    }
  }
  
  update_state (event, key) {
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
    event.preventDefault();
    //this.history.push('/');
    
    if (this.props.edit_id) {
      // edit action
    } else {
      this.props.onAdd(this.state.name, this.state);
    }
  }
  
  edit_link (key) {
    return '/edit/' + key;
  }
  
  render () {
    return (
      <div>
        <form onSubmit={event => this.handleSubmit(event)}>
          <Card className="md-card">
            <CardTitle title={this.title}/>
            <CardText>
              <TextField floatingLabelText="Your Name"
              value={this.state.name}
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
            Key: <a href={this.edit_link(key)}>{key}</a>, Value: {this.props.contacts[key].name}
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
    onAdd: function (id, data) {
      dispatch(addContact(id, data));
    }
  }
}

var MyFormRedux = connect(
  mapStateToProps, mapDispatchToProps
)(MyForm);

export default MyFormRedux
