import React, { Component } from 'react';
import { Row, Col, Form, FormControl, FormGroup, Button, ListGroup, Tab, Card } from 'react-bootstrap';

export class Customisation extends Component {
	render() {
		const { visualize, reset, changeAlgorithm } = this.props;
		return (
			<Form>
				<Card bg="light" text="dark" style={{ height: '815px' }}>
					<Card.Header as="h5">Customization</Card.Header>
					<Card.Body>
						<FormGroup>
							<Card.Title style={{ textAlign: 'left' }}>Pick an Algorithm</Card.Title>
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
												Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni accusamus
												maiores saepe assumenda.
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
						</FormGroup>
						<FormGroup style={{ float: 'left' }}>
							<Button onClick={() => visualize()} variant="primary" size="lg">
								Visualize!
							</Button>{' '}
							<Button onClick={() => reset()} variant="outline-primary" size="lg">
								Reset
							</Button>{' '}
						</FormGroup>
					</Card.Body>
				</Card>
			</Form>
		);
	}
}

export default Customisation;
