const defaultState = {
  password: null,
};

export const passwordReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_PASSWORD':
      return { ...state, password: action.payload };
    case 'REMOVE_PASSWORD':
      return { ...state, password: action.payload };
    default:
      return state;
  }
};

export const addPasswordAction = (payload) => ({ type: 'REMOVE_PASSWORD', payload });
export const removePasswordAction = (payload) => ({ type: 'REMOVE_PASSWORD', payload });
