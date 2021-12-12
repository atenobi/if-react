import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// reducers
import { userReducer } from './userReducer';
import { passwordReducer } from './passwordReducer';
import { hotelsReducer } from './hotelsReducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['hotels', 'favoriteHotels'],
};

const rootReducer = combineReducers({
  user: userReducer,
  password: passwordReducer,
  hotels: hotelsReducer,
  favoriteHotels: hotelsReducer,
});

export default persistReducer(persistConfig, rootReducer);
