import React, { Component } from 'react';

import MyForm from './myform';

class EditForm extends Component {
  constructor (props) {
    super(props);
    
    console.log(props.match.params);
  }
  
  render () {
    return (
      <MyForm edit_id={this.props.match.params.id}/>
    )
  }
}

export default EditForm;

