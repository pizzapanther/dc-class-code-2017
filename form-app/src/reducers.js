var initialState = {};

export function contacts (state, action) {
  if (state === undefined) {
    return initialState;
  }
  
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

export default contacts;
