import React, { Component } from 'react';
import './animation.css';

export class Node extends Component {
	getStyle() {
		const { type } = this.props;
		const style = {
			display: 'inline-block',
			outline: '1px solid black',
			height: '27px',
			padding: '0px',
			width: '27px'
		};

		if (type === 'regular') {
			style.background = '#fff';
		} else if (type === 'wall') {
			style.background = '#004';
		} else if (type === 'start') {
			style.background = '#E3341C';
		} else if (type === 'end') {
			style.background = '#18E746';
		}

		return style;
	}

	render() {
		const { row, column, type, onMouseDown, onMouseEnter, onMouseUp } = this.props;
		return (
			<td
				id={`node_${row}_${column}`}
				className="node"
				style={this.getStyle(type)}
				onMouseDown={() => onMouseDown(row, column)}
				onMouseEnter={() => onMouseEnter(row, column)}
				onMouseUp={() => onMouseUp()}
			/>
		);
	}
}

export default Node;
