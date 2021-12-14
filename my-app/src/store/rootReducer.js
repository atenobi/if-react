import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// reducers
import { authorization } from './autorization';
import { hotelsReducer } from './hotelsReducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user', 'hotels', 'favoriteHotels'],
};

const rootReducer = combineReducers({
  user: authorization,
  hotels: hotelsReducer,
  favoriteHotels: hotelsReducer,
});

export default persistReducer(persistConfig, rootReducer);
