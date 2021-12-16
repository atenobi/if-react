const defaultState = {
  hotels: [],
};

export const hotelsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_HOTELS':
      return { ...state, hotels: [...state.hotels, ...action.payload] };
    case 'CLEAR_HOTELS':
      return { ...state, hotels: [] };
    default:
      return state;
  }
};

export const addHotelsAction = (payload) => ({ type: 'ADD_HOTELS', payload });
export const clearHotelsAction = () => ({ type: 'CLEAR_HOTELS' });
