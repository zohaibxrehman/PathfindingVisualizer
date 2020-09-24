import React, { Component } from 'react';
import { Row, Col, FormGroup, Card, Tab, ListGroup } from 'react-bootstrap';

export class SearchPicker extends Component {
	render() {
		const { changeAlgorithm } = this.props;
		return (
			<div>
				<FormGroup>
					<Card.Title style={{ textAlign: 'left' }}>Pick an Algorithm</Card.Title>
					<Tab.Container id="list-group-tabs-example" defaultActiveKey="#bfs">
						<Row>
							<Col sm={4}>
								<ListGroup>
									<ListGroup.Item
										action
										href="#astar"
										onClick={() => {
											changeAlgorithm('astar');
										}}
									>
										A* Search
									</ListGroup.Item>
									<ListGroup.Item
										action
										href="#dijkstra"
										onClick={() => {
											changeAlgorithm('dijkstra');
										}}
									>
										Dijkstra
									</ListGroup.Item>
									<ListGroup.Item
										action
										href="#bfs"
										onClick={() => {
											changeAlgorithm('bfs');
										}}
									>
										Breadth First Search
									</ListGroup.Item>
								</ListGroup>
							</Col>
							<Col sm={8}>
								<Tab.Content>
									<Tab.Pane eventKey="#bfs">
										BFS is a traversing algorithm where you should start from a selected node and
										traverse the graph layerwise thus exploring the neighbour nodes.{' '}
										<em>Shortest path is guarenteed!</em>
									</Tab.Pane>
									<Tab.Pane eventKey="#dijkstra">
										Dijikstra's algorithm is a greedy algorithm for finding the shortest path between two nodes.
									</Tab.Pane>
									<Tab.Pane eventKey="#astar">
									A* algorithm introduces a heuristic into a regular graph-searching algorithm,
									 essentially planning ahead at each step so a more optimal decision is made.
									 <br />
									 <em> It is very popular in video games and web-based maps.</em>
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

export default SearchPicker;
