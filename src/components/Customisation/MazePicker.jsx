import React, { Component } from 'react';
import { Row, Col, FormGroup, Card, Tab, ListGroup } from 'react-bootstrap';

export class MazePicker extends Component {
	render() {
		const { changeMaze } = this.props;
		return (
			<div>
				<FormGroup>
					<Card.Title style={{ textAlign: 'left' }}>Now, Select a Maze</Card.Title>
					<Tab.Container id="list-group-tabs-example" defaultActiveKey="#draw">
						<Row>
							<Col sm={4}>
								<ListGroup>
									<ListGroup.Item
										action
										href="#draw"
										onClick={() => {
											changeMaze('draw');
										}}
									>
										Draw your own
									</ListGroup.Item>
									<ListGroup.Item
										action
										href="#simpleTerrain"
										onClick={() => {
											changeMaze('simpleTerrain');
										}}
									>
										Simple Terrain
									</ListGroup.Item>
									<ListGroup.Item
										action
										href="#recursiveDivision"
										onClick={() => {
											changeMaze('recursiveDivision');
										}}
									>
										Recursive Division
									</ListGroup.Item>
									<ListGroup.Item
										action
										href="#flappyBirdGrid"
										onClick={() => {
											changeMaze('flappyBirdGrid');
										}}
									>
										Flappy Bird Grid
									</ListGroup.Item>
								</ListGroup>
							</Col>
							<Col sm={8}>
								<Tab.Content>
									<Tab.Pane eventKey="#draw">
										Draw your own walls on the grid and the search algorithm will find its way
										around it!
									</Tab.Pane>
									<Tab.Pane eventKey="#simpleTerrain">
										Randomized terrain covering about one-third of all nodes on the grid.
									</Tab.Pane>
									<Tab.Pane eventKey="#recursiveDivision">
										A maze will be generated using a divide and conquer approach.
									</Tab.Pane>
									<Tab.Pane eventKey="#flappyBirdGrid">Possibly, no explanation needed!</Tab.Pane>
								</Tab.Content>
							</Col>
						</Row>
					</Tab.Container>
				</FormGroup>
			</div>
		);
	}
}

export default MazePicker;
