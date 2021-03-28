import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import './App.css';
import Sidebar from './components/Sidebar';

function App() {
	return (
		<div className='App'>
			<Router>
				<>
					<Header />
					<MainbodyContainer>
						<Sidebar />
						<Switch>
							<Route path='/' exact></Route>
						</Switch>
					</MainbodyContainer>
				</>
			</Router>
		</div>
	);
}

export default App;
const MainbodyContainer = styled.div`
	height: 100vh;
	display: flex;
`;
