import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';

export class Customisation extends Component {
	getStyle() {
		return {
			padding: '30px'
		};
	}

	render() {
		const { visualize, reset } = this.props;
		return (
			<div style={this.getStyle()}>
				<Form>
					<span onClick={() => visualize()}>
						<Button variant="primary">Visualize!</Button>{' '}
					</span>
					<span onClick={() => reset()}>
						<Button variant="primary">Reset</Button>{' '}
					</span>
				</Form>
			</div>
		);
	}
}

export default Customisation;
