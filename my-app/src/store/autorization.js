const user = {
  userMail: null,
  userPassword: null,
};

export const authorization = (state = user, action) => {
  switch (action.type) {
    case 'ADD_USER_MAIL':
      return { ...state, userMail: action.payload };
    case 'ADD_USER_PASSWORD':
      return { ...state, userPassword: action.payload };
    case 'REMOVE_USER':
      return { ...state, userMail: null, userPassword: null };
    default:
      return state;
  }
};

export const addUserAction = (payload) => ({ type: 'ADD_USER_MAIL', payload });
export const addPasswordAction = (payload) => ({ type: 'ADD_USER_PASSWORD', payload });
export const removeUserAction = () => ({ type: 'REMOVE_USER' });
