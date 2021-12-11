const defaultState = {
  hotels: [],
  favoriteHotels: [],
};

export const hotelsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_HOTELS':
      return { ...state, hotels: [...state.hotels, ...action.payload] };
    // case 'CLEAR_HOTELS':
    //   return { ...state, hotels: [...defaultState] };
    case 'ADD_FAVORITE_HOTELS':
      return { ...state, favoriteHotels: [...state.favoriteHotels, ...action.payload] };
    default:
      return state;
  }
};

export const addHotelsAction = (payload) => ({ type: 'ADD_HOTELS', payload });
// export const clearHotelsAction = () => ({ type: 'CLEAR_HOTELS' });
export const addFavoriteHotelsAction = (payload) => ({ type: 'ADD_FAVORITE_HOTELS', payload });
