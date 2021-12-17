const defaultState = {
  hotels: [],
};

export const hotelsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_HOTELS':
      return { ...state, hotels: [...action.payload] };
    default:
      return state;
  }
};

export const addHotelsAction = (payload) => ({ type: 'ADD_HOTELS', payload });
