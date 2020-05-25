import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

export class Form extends Component {
	getStyle() {
		return {
			background: '#f4f4',
			padding: '10px'
		};
	}

	render() {
		const { onClick } = this.props;
		return (
			<div style={this.getStyle()}>
				<span onClick={() => onClick()}>
					<Button variant="primary">Visualize!</Button>{' '}
				</span>
			</div>
		);
	}
}

export default Form;
