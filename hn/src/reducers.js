var initialState = {
  top_stories: []
};

export function hn_reducer (state, action) {
  if (state === undefined) {
    return initialState;
  }
  switch (action.type) {
    case 'SET_TOP_STORIES':
      var new_state = {};
      new_state = Object.assign(
        {},
        state,
        {top_stories: action.stories}
      );
      console.log(new_state);
      return new_state;
      
    default:
      return state;
  }
}

export default hn_reducer;
