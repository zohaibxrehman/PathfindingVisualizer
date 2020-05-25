import React, { Component } from 'react';
import Node from './Node';

export class Board extends Component {
	constructor() {
		super();
		this.state = {
			nodes: [],
			isMouseDown: false
		};
	}

	componentDidMount() {
		let initialNodes = createNodes();
		initialNodes[12][8].type = 'start';
		initialNodes[12][27].type = 'end';
		this.setState({ nodes: initialNodes });
	}

	getStyle = () => {
		return {
			background: '#f4f',
			padding: '10px'
		};
	};

	handleMouseDown(row, column) {
		const newNodes = this.state.nodes.slice();
		newNodes[row][column].type = 'wall';
		this.setState({ nodes: newNodes, isMouseDown: true });
	}

	handleMouseEnter(row, column) {
		if (this.state.isMouseDown) {
			const newNodes = this.state.nodes.slice();
			newNodes[row][column].type = 'wall';
			this.setState({ nodes: newNodes });
		} else {
			return;
		}
	}

	handleMouseUp() {
		this.setState({ isMouseDown: false });
	}

	handleMouse;

	render() {
		const { nodes, isMouseDown } = this.state;

		return (
			<div style={this.getStyle()}>
				<table>
					<tbody>
						{nodes.map((rowNodes, rowId) => {
							return (
								<tr key={rowId} style={rowStyle}>
									{rowNodes.map((node, nodeId) => {
										const { row, column, type } = node;
										return (
											<Node
												key={nodeId}
												row={row}
												column={column}
												type={type}
												onMouseDown={(row, column) => this.handleMouseDown(row, column)}
												onMouseEnter={(row, column) => this.handleMouseEnter(row, column)}
												onMouseUp={() => this.handleMouseUp()}
												// this.handleClick = this.handleClick.bind(this);
											/>
										);
									})}
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
		);
	}
}

// Helper Functions:
const rowStyle = {
	whiteSpace: 'nowrap', // makes table unbreakable
	display: 'inline block',
	padding: '0px',
	margin: '0px'
};

const createNodes = () => {
	const nodes = [];
	for (let row = 0; row < 25; row++) {
		const rowNodes = [];
		for (let column = 0; column < 35; column++) {
			rowNodes.push(createNodeObject(row, column));
		}
		nodes.push(rowNodes);
	}
	return nodes;
};

const createNodeObject = (row, column) => {
	return {
		row,
		column,
		type: 'regular'
	};
};

export default Board;
