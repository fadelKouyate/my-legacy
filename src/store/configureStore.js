
import { createStore, applyMiddleware} from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import Asyncstorage from 'redux-persist/lib/storage';
import EncryptTransform from './transforms/EncryptTransform';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import UserReducer from './reducers/UserReducer';
import thunk from 'redux-thunk';




const persistConfig = {
 key: 'root',
 storage: Asyncstorage,
 stateReconciler: autoMergeLevel2, // see "Merge Process" section for details.
 //blacklist: ['cov_user']
 transforms: [EncryptTransform]
};

/*const reducers = combineReducers({
    user: UserReducer,
    trip: TripReducer
  })
*/
const pReducer = persistReducer(persistConfig, UserReducer);

export const store = createStore(pReducer, applyMiddleware(thunk));
export const persistor = persistStore(store);