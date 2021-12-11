import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

// reducers
import { userReducer } from './userReducer';
import { passwordReducer } from './passwordReducer';
import { hotelsReducer } from './hotelsReducer';

const rootReducer = combineReducers({
  user: userReducer,
  password: passwordReducer,
  hotels: hotelsReducer,
  favoriteHotels: hotelsReducer,
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
