import React, { Component } from 'react';
import { Row, Col, Form, Button, ListGroup, Tab, Card } from 'react-bootstrap';

export class Customisation extends Component {
	getStyle() {
		return {
			margin: '0px'
		};
	}

	render() {
		const { visualize, reset, changeAlgorithm } = this.props;
		return (
			<div style={this.getStyle()}>
				<Form>
					<Card bg="light" text="dark" style={{ height: '815px' }}>
						<Card.Header as="h5">Customization</Card.Header>
						<Card.Body>
							<div style={{ margin: '20px' }}>
								<Tab.Container id="list-group-tabs-example" defaultActiveKey="#bfs">
									<Row>
										<Col sm={4}>
											<ListGroup>
												<ListGroup.Item
													action
													href="#bfs"
													onClick={() => {
														changeAlgorithm('bfs');
													}}
												>
													Breadth First Search
												</ListGroup.Item>
												<ListGroup.Item
													action
													href="#dfs"
													onClick={() => {
														changeAlgorithm('dfs');
													}}
												>
													Depth First Search
												</ListGroup.Item>
											</ListGroup>
										</Col>
										<Col sm={8}>
											<Tab.Content>
												<Tab.Pane eventKey="#bfs">
													Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
													accusamus maiores saepe assumenda.
												</Tab.Pane>
												<Tab.Pane eventKey="#dfs">
													Possimus incidunt saepe adipisci quae fuga expedita dicta nobis modi
													consectetur, recusandae, eos iste in iure ipsum, laboriosam libero
													officiis!
												</Tab.Pane>
											</Tab.Content>
										</Col>
									</Row>
								</Tab.Container>
							</div>
							<div style={{ margin: '20px' }}>
								<Row>
									<Col md={{ span: 2 }}>
										<span onClick={() => visualize()}>
											<Button variant="primary" size="lg">
												Visualize!
											</Button>{' '}
										</span>
									</Col>
									<Col md={{ span: 2, offset: 1 }}>
										<span onClick={() => reset()}>
											<Button variant="outline-primary" size="lg">
												Reset
											</Button>{' '}
										</span>
									</Col>
								</Row>
							</div>
						</Card.Body>
					</Card>
				</Form>
			</div>
		);
	}
}

export default Customisation;
