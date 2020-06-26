import React, { Component } from 'react';
import { Form, FormGroup, Button, Card } from 'react-bootstrap';
import SearchPicker from './SearchPicker';
import MazePicker from './MazePicker';

export class Customisation extends Component {
	render() {
		const { visualize, reset, changeAlgorithm, changeMaze, buttonDisable } = this.props;
		return (
			<Form>
				<Card bg="light" text="dark" style={{ height: '815px' }}>
					<Card.Header as="h5">Customization</Card.Header>
					<Card.Body>
						<SearchPicker changeAlgorithm={(newAlg) => changeAlgorithm(newAlg)} />
						<MazePicker changeMaze={(newMaze) => changeMaze(newMaze)} />
						<FormGroup style={{ float: 'left' }}>
							<Button onClick={() => visualize()} variant="primary" size="lg" disabled={buttonDisable}>
								Visualize!
							</Button>{' '}
							<Button
								onClick={() => reset()}
								variant="outline-primary"
								size="lg"
								disabled={buttonDisable}
							>
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
