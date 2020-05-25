import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export class NavBar extends Component {
	render() {
		return (
			<div>
				<Navbar bg="dark" variant="dark">
					<Navbar.Brand href="#home">Pathfinder.algorithm</Navbar.Brand>
				</Navbar>
			</div>
		);
	}
}

export default NavBar;
