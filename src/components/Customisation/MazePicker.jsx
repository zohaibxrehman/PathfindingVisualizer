import React, { Component } from 'react';
import { Row, Col, FormGroup, Card, Tab, ListGroup } from 'react-bootstrap';

export class MazePicker extends Component {
	render() {
		const { changeMaze } = this.props;
		return (
			<div>
				<FormGroup>
					<Card.Title style={{ textAlign: 'left' }}>Now, Select a Maze</Card.Title>
					<Tab.Container id="list-group-tabs-example" defaultActiveKey="#dummy0">
						<Row>
							<Col sm={4}>
								<ListGroup>
									<ListGroup.Item
										action
										href="#dummy0"
										onClick={() => {
											changeMaze('draw');
										}}
									>
										Draw your own
									</ListGroup.Item>
									<ListGroup.Item
										action
										href="#dummy1"
										onClick={() => {
											changeMaze('simple');
										}}
									>
										Simple Terrain
									</ListGroup.Item>
									<ListGroup.Item
										action
										href="#dumm2"
										onClick={() => {
											changeMaze('recursize');
										}}
									>
										Recursive Maze
									</ListGroup.Item>
								</ListGroup>
							</Col>
							<Col sm={8}>
								<Tab.Content>
									<Tab.Pane eventKey="#dummy0">
										Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni accusamus maiores
										saepe assumenda.
									</Tab.Pane>
									<Tab.Pane eventKey="#dummy1">
										Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni accusamus maiores
										saepe assumenda.
									</Tab.Pane>
									<Tab.Pane eventKey="#dumm2">
										Possimus incidunt saepe adipisci quae fuga expedita dicta nobis modi
										consectetur, recusandae, eos iste in iure ipsum, laboriosam libero officiis!
									</Tab.Pane>
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
