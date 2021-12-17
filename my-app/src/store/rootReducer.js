import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// reducers
import { authorization } from './autorization';
import { hotelsReducer } from './hotelsReducer';
import { userSearchReducer } from './userSearchReducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user', 'hotels'],
};

const rootReducer = combineReducers({
  user: authorization,
  hotels: hotelsReducer,
  userSearch: userSearchReducer,
});

export default persistReducer(persistConfig, rootReducer);
