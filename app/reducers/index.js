import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import users from './users';
import background from './background';

const rootReducer = combineReducers({users, background, routing: routerReducer})

export default rootReducer;