const initialState = {
  featured: []
}

const featuredReducer = (state=initialState, action) => {
  switch (action.type) {
    case 'RECEIVE_FEATURED': 
      return {...state, 
        featured: action.payload.featured
      }
      break;

      default:
      return state;
  }
}

export default featuredReducer;