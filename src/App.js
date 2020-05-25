import React, { Component } from 'react';
import Pathfinder from './components/Pathfinder';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Pathfinder />
			</div>
		);
	}
}
export default App;
