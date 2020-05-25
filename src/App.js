import React, { Component } from 'react';
import NavBar from './components/NavBar';
import Board from './components/Board';
import Form from './components/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { Container, Row, Col } from 'react-bootstrap';

class App extends Component {
	render() {
		return (
			<div className="App">
				<NavBar />
				{/* <Container> */}
				<Row>
					<Col sm={8}>
						<Board />
					</Col>
					<Col sm={4}>
						<Form />
					</Col>
				</Row>
				{/* </Container> */}
			</div>
		);
	}
}
export default App;
