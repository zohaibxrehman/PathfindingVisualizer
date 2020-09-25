import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import navStyle from './NavBar.module.css';
import logo from './maze.svg';

export class NavBar extends Component {
	render() {
		return (
			<div>
				<Navbar bg="dark" variant="dark">
					<Navbar.Brand href="#home">
						<link
							href="https://fonts.googleapis.com/css2?family=Share+Tech+Mono&display=swap"
							rel="stylesheet"
						/>
						<img alt="" src={logo} width="35" height="35" className="d-inline-block align-top" />
						{'  '}
						<span className={navStyle.navBar}>PATHFINDER </span>
						<small style={{ color: '#eee' }}>
							Pathfinding and Maze Generation Algorithm Visualizer
						</small>{' '}
					</Navbar.Brand>
				</Navbar>
			</div>
		);
	}
}

export default NavBar;
