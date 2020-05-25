import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

export class Form extends Component {
	getStyle = () => {
		return {
			background: '#f4f4',
			padding: '10px'
			//   whiteSpace: 'nowrap'
		};
	};

	render() {
		return (
			<div style={this.getStyle()}>
				<Button variant="primary">Visualize!</Button>{' '}
			</div>
		);
	}
}

export default Form;
