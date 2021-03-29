import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import './App.css';
import Sidebar from './components/Sidebar';
import Chat from './components/Chat';

function App() {
	return (
		<div className='App'>
			<Router>
				<>
					<Header />
					<MainbodyContainer>
						<Sidebar />
						<Switch>
							<Route path='/' exact component={Chat} />
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
