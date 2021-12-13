const defaultState = {
  user: null,
};

export const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_USER':
      return { ...state, user: action.payload };
    case 'REMOVE_USER':
      return { ...state, user: action.payload };
    case 'ADD_PASSWORD':
      return { ...state, password: action.payload };
    case 'REMOVE_PASSWORD':
      return { ...state, password: action.payload };
    default:
      return state;
  }
};

export const addUserAction = (payload) => ({ type: 'ADD_USER', payload });
export const removeUserAction = (payload) => ({ type: 'REMOVE_USER', payload });
export const addPasswordAction = (payload) => ({ type: 'ADD_PASSWORD', payload });
export const removePasswordAction = (payload) => ({ type: 'REMOVE_PASSWORD', payload });
