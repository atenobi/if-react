const userSearch = {
  userSearchHotel: 'empty',
};

export const userSearchReducer = (state = userSearch, action) => {
  switch (action.type) {
    case 'USER_SEARCH_HOTEL':
      return { ...state, userSearchHotel: action.payload };
    case 'CLEAR_USER_SEARCH_HOTEL':
      return { ...state, userSearchHotel: 'empty' };
    default:
      return state;
  }
};

export const userSearchHotelAction = (payload) => ({ type: 'USER_SEARCH_HOTEL', payload });
export const clearUserSearchHotelAction = (payload) => ({ type: 'USER_SEARCH_HOTEL', payload });
