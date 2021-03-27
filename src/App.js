import React from 'react';
// import { Counter } from './features/Counter';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
	return (
		<div className='App'>
			<Router>
				<>
					<Switch>
						<Route path='/' exact>
							<h1>home page</h1>
						</Route>
					</Switch>
				</>
			</Router>
		</div>
	);
}

export default App;
