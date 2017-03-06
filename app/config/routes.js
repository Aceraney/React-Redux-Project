var React = require('react');
import DRA from '../components/DRA';
import AceNav from '../components/acenav'
import { Router, Route, IndexRoute, browserHistory} from 'react-router';
import about from '../components/about'
import resume from '../components/resume.js'
import contact from '../components/contact'
import splash from '../components/splash'

import { render } from 'react-dom';

import Main from '../components/Main';
import App from '../components/App';

import {Provider} from 'react-redux';
import store, {history} from '../store'


var routes= 
<Provider store ={store}>
	<Router history ={history}>
		<Route path="/" component = {Main}>
			<Route component ={AceNav} >
				<IndexRoute component = {splash}/>
				</Route>
				


		<Route path = '/' component={AceNav} >
		
		<Route path ="/about" component={about} />
		<Route path ="/resume" component={resume}/>
		<Route path ='/contact' component={contact}/>
		</Route>
			
			
		</Route>
		<Route path ='/dra' component= {DRA}/>
		<Route path="/battlefield" component ={App}/>

		
		
  </Router>
  </Provider>


export default routes;