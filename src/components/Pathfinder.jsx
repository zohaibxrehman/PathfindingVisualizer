import React, { Component } from 'react';
import NavBar from './NavBar';
import Board from './Board';
import Form from './Form';

import { Row, Col } from 'react-bootstrap';

export class Pathfinder extends Component {
	constructor() {
		super();
		this.state = {
			nodes: [],
			isMouseDown: false,
			mode: 'draw'
		};
	}

	componentDidMount() {
		let initialNodes = createNodes();
		initialNodes[12][8].type = 'start';
		initialNodes[12][27].type = 'end';
		this.setState({ nodes: initialNodes });
		console.log(this.props.nodes);
	}

	handleMouseDown(row, column) {
		const newNodes = this.state.nodes.slice();
		if (newNodes[row][column].type === 'regular') {
			newNodes[row][column].type = 'wall';
			this.setState({ nodes: newNodes, isMouseDown: true, mode: 'draw' });
		} else if (newNodes[row][column].type === 'wall') {
			newNodes[row][column].type = 'regular';
			this.setState({ nodes: newNodes, isMouseDown: true, mode: 'erase' });
		}
	}

	handleMouseEnter(row, column) {
		if (this.state.isMouseDown) {
			const newNodes = this.state.nodes.slice();
			if (this.state.mode === 'draw' && newNodes[row][column].type === 'regular') {
				newNodes[row][column].type = 'wall';
			} else if (this.state.mode === 'erase' && newNodes[row][column].type === 'wall') {
				newNodes[row][column].type = 'regular';
			}

			this.setState({ nodes: newNodes });
		} else {
			return;
		}
	}

	handleMouseUp() {
		this.setState({ isMouseDown: false });
	}

	render() {
		const { nodes, isMouseDown } = this.state;
		return (
			<div>
				<NavBar />
				<Row>
					<Col sm={8}>
						<Board
							nodes={nodes}
							isMouseDown={isMouseDown}
							onMouseDown={(row, column) => this.handleMouseDown(row, column)}
							onMouseEnter={(row, column) => this.handleMouseEnter(row, column)}
							onMouseUp={() => this.handleMouseUp()}
						/>
					</Col>
					<Col sm={4}>
						<Form />
					</Col>
				</Row>
			</div>
		);
	}
}

// Helpers

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

export default Pathfinder;
