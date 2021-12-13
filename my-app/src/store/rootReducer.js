import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// reducers
import { userReducer, passwordReducer } from './userReducer';
import { hotelsReducer } from './hotelsReducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user', 'password', 'hotels', 'favoriteHotels'],
};

const rootReducer = combineReducers({
  user: userReducer,
  password: userReducer,
  hotels: hotelsReducer,
  favoriteHotels: hotelsReducer,
});

export default persistReducer(persistConfig, rootReducer);
