import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export class NavBar extends Component {
	render() {
		return (
			<div>
				<Navbar bg="dark" variant="dark">
					<Navbar.Brand href="#home">
						<img alt="" src="/maze.svg" width="35" height="35" className="d-inline-block align-top" />
						{'  '}
						PATHFINDER{' '}
						<small style={{ color: '#eee' }}>Pathfinding and Maze Generation Algorithm Visualizer</small>
					</Navbar.Brand>
				</Navbar>
			</div>
		);
	}
}

export default NavBar;
