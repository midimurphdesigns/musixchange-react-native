import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import { postReducer } from './reducers/postReducer';
// import protectedDataReducer from './reducers/protected-data';
// import authReducer from './reducers/auth';
// import { loadAuthToken } from './local-storage';
// import { setAuthToken } from './actions/auth';
// import { getUserInfo } from './actions/users';

const store = createStore(
    // combineReducers({
        // auth: authReducer,
        postReducer,
        // protectedData: protectedDataReducer,
    // }),
    applyMiddleware(thunk, logger),
);

// // Hydrate the authToken from locaStorage if it exists
// const authToken = loadAuthToken();
// if (authToken) {
//     store.dispatch(setAuthToken(authToken));
//     store.dispatch(getUserInfo());
//     // store.dispatch(refreshAuthToken());
// }

export default store;
