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
										A*
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
										Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni accusamus maiores
										saepe assumenda.
									</Tab.Pane>
									<Tab.Pane eventKey="#dijkstra">
										Possimus incidunt saepe adipisci quae fuga expedita dicta nobis modi
										consectetur, recusandae, eos iste in iure ipsum, laboriosam libero officiis!
									</Tab.Pane>
									<Tab.Pane eventKey="#astar">
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

export default SearchPicker;
