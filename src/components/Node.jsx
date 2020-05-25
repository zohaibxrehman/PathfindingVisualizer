import React, { Component } from 'react';
import './animation.css';

export class Node extends Component {
	getStyle() {
		const { type } = this.props;
		const style = {
			// borderRadius: '5px',
			display: 'inline-block',
			outline: '1px solid #737C8C',
			height: '25px',
			// margin: '1rem',
			// position: 'relative',
			width: '25px'
		};

		if (type === 'regular') {
			style.background = '#fff';
		} else if (type === 'wall') {
			style.background = '#004';
		} else if (type === 'start') {
			style.background = '#822';
		} else if (type === 'end') {
			style.background = '#282';
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
