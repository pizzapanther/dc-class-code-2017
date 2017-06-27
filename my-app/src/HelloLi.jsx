import React, { Component } from 'react';

class HelloLi extends Component {
  handleClick(event, person) {
    if (person.selected) {
      person.selected = false;
    } else {
      person.selected = true;
    }
    
    this.props.callback();
  }
  
  render () {
    return (
      <li>
        <button onClick={(e) => this.handleClick(e, this.props.item)}>
          <span className={this.props.item.selected ? 'selected' : 'not' }>
            {this.props.item.name}
          </span>
        </button>
      </li>
    )
  }
}

export default HelloLi;
