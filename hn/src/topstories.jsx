import React, { Component } from 'react';

import { connect } from 'react-redux';

class TopStories extends Component {
  render () {
    return (
      <ul>
        {
          this.props.stories.map((s) => {
            return (
              <li>{s}</li>
            )
          })
        }
      </ul>
    );
  }
}

function mapStateToProps (state) {
  return {
    stories: state.top_stories
  }
}

TopStories = connect(mapStateToProps)(TopStories)

export default TopStories;
