// import { createStore } from 'redux';

// function tweetsReducer(state = [], action = {}) {
//     if (action.type === 'LOAD_TWEETS') {
//         return[...action.payload.tweets];
//     }

//     return state;
// }

// const store = createStore(tweetsReducer);

// export default store;

import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import { tweetsReducer } from './ducks/tweets';
import { authReducer } from './ducks/auth';

const store = createStore(
    combineReducers({
        tweets: tweetsReducer,
        auth: authReducer
    }),
    applyMiddleware(thunk)
); export default store;