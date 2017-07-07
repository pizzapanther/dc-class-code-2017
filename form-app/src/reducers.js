
var initialState = {};

export function contacts (state = initialState, action) {
  switch (action.type) {
    case 'ADD_CONTACT':
      var r = Object.assign(
        {},
        state,
        {[action.id]: action.data},
      );
      console.log(r);
      return r;
      
    case 'INIT_CONTACTS':
      console.log('INIT', action.data);
      return action.data  || {};
      
    default:
      return state;
  }
}

function visibilityFilter(state = 'SHOW_ALL', action) {
  switch (action.type) {
    case 'SET_FILTER':
      return action.filter;
    default:
      return state;
  }
}

export default contacts;
