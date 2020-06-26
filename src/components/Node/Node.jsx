import React, { Component } from 'react';
import './animation.css';

export class Node extends Component {
	shouldComponentUpdate(nextProps, nextState) {
		return this.props.type !== nextProps.type;
	}

	getStyle() {
		const style = {
			display: 'inline-block',
			outline: '1px solid black',
			height: '27px',
			padding: '0px',
			width: '27px'
		};

		return style;
	}

	getClass() {
		const { type } = this.props;
		if (type === 'regular') {
			return 'regular';
		} else if (type === 'wall') {
			return 'walls';
		} else if (type === 'start') {
			return 'start';
		} else if (type === 'end') {
			return 'end';
		}
	}

	render() {
		const { row, column, type, onMouseDown, onMouseEnter } = this.props;
		const styleClasses = this.getClass();
		return (
			<td
				id={`node_${row}_${column}`}
				className={styleClasses}
				style={this.getStyle(type)}
				onMouseDown={() => onMouseDown(row, column)}
				onMouseEnter={() => onMouseEnter(row, column)}
			/>
		);
	}
}

export default Node;
