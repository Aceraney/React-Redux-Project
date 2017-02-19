import {createStore, compose } from 'redux';
import {syncHistoryWithStore} from 'react-router-redux';
import {browserHistory} from 'react-router';
//import the root reducer
import rootReducer from './reducers/index';





const initialState={
	

	users:[],

	background: 0


};

const store = createStore(rootReducer, initialState);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;