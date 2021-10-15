import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
  getAllSpaceLaunchesReducer,
  getSpaceLaunchByIdReducer,
} from './redux/reducers/launchReducers';

const reducer = combineReducers({
  getAllSpaceLaunches: getAllSpaceLaunchesReducer,
  getSpaceLaunchById: getSpaceLaunchByIdReducer,
});

const middleware = [thunk];

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
