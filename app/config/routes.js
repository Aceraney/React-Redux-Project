var React = require('react');
import DRA from '../components/DRA';
import { Router, Route, IndexRoute, browserHistory} from 'react-router';

import { render } from 'react-dom';

import Main from '../components/Main';
import App from '../components/App';

import {Provider} from 'react-redux';
import store, {history} from '../store'


var routes= 
<Provider store ={store}>
	<Router history ={history}>
		<Route path="/" component = {Main}>
			<IndexRoute component ={DRA} />
			
		</Route>
		<Route path="/battlefield" component ={App}/>
		
		
  </Router>
  </Provider>


export default routes;