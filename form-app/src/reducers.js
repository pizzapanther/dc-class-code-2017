import { combineReducers } from 'redux';

var initialState = {
  contacts: {},
  showFavorites: 'SHOW_ALL'
};

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
const contactApp = combineReducers({
  visibilityFilter,
  contacts
});

export default contactApp;
