import React, { Component } from 'react';
import NavBar from './NavBar';
import Board from './Board';
import Customisation from './Customisation/Customisation';

import { breadthFirstSearch } from '../path_algorithms/breadthFirstSearch';
import { simpleTerrain } from '../maze_algorithms/simpleTerrain';

import { Row, Col } from 'react-bootstrap';

// const clonedeep = require('lodash/cloneDeep');

const TOTAL_ROWS = 27;
const TOTAL_COLS = 45;

const START_NODE_ROW = 12;
const START_NODE_COL = 8;
const END_NODE_ROW = 12;
const END_NODE_COL = 35;

export class Pathfinder extends Component {
	constructor() {
		super();
		this.state = {
			nodes: [],
			isMouseDown: false,
			mode: 'draw',
			algorithm: 'bfs'
			// maze: 'draw'
		};
	}

	componentDidMount() {
		this.reset();
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

	changeAlgorithm(newAlg) {
		this.setState({ algorithm: newAlg });
		// console.log(this.state.algorithm);
	}

	// FIX!!
	changeMaze(newMaze) {
		if (newMaze === 'simple') {
			// const nodesCopy = clonedeep(this.state.nodes);
			const nodesCopy = this.state.nodes.slice();
			console.table(nodesCopy)
			const { newNodes, drawnNodes } = simpleTerrain(nodesCopy);
			console.table(newNodes);
			let curr;
			
			console.table(drawnNodes);
			for (let i = 0; i < drawnNodes.length; i++) {
				setTimeout(() => {
					curr = drawnNodes[i];
					// console.log(curr);
					document.getElementById(`node_${curr.row}_${curr.column}`).className = 'node walls';
				}, i);
			}
			// this.setState({ nodes: newNodes });
		}

		// this.setState({ maze: newMaze });
	}

	visualize() {
		const { nodes } = this.state;
		const startNode = nodes[START_NODE_ROW][START_NODE_COL];
		const endNode = nodes[END_NODE_ROW][END_NODE_COL];
		const { path, visitedNodes } = breadthFirstSearch(startNode, endNode, nodes);

		let curr;
		for (let i = 0; i < visitedNodes.length; i++) {
			setTimeout(() => {
				curr = visitedNodes[i];
				document.getElementById(`node_${curr.row}_${curr.column}`).className = 'node visited';
			}, 5 * i);
		}
		setTimeout(() => {
			for (let i = 0; i < path.length; i++) {
				setTimeout(() => {
					curr = path[i];
					document.getElementById(`node_${curr.row}_${curr.column}`).className = 'node shortest-path';
				}, 30 * i);
			}
		}, 5 * visitedNodes.length);
	}

	reset() {
		let initialNodes = createNodes();
		initialNodes[START_NODE_ROW][START_NODE_COL].type = 'start';
		initialNodes[END_NODE_ROW][END_NODE_COL].type = 'end';
		document.querySelectorAll('.node').forEach((node) => (node.className = 'node'));
		this.setState({ nodes: initialNodes });
	}

	render() {
		const { nodes, isMouseDown } = this.state;
		return (
			<div>
				<NavBar />
				<Row>
					<Col lg={8}>
						<Board
							nodes={nodes}
							isMouseDown={isMouseDown}
							onMouseDown={(row, column) => this.handleMouseDown(row, column)}
							onMouseEnter={(row, column) => this.handleMouseEnter(row, column)}
							onMouseUp={() => this.handleMouseUp()}
						/>
					</Col>
					<Col lg={4}>
						<Customisation
							visualize={() => this.visualize()}
							reset={() => this.reset()}
							changeAlgorithm={(newAlg) => this.changeAlgorithm(newAlg)}
							changeMaze={(newMaze) => this.changeMaze(newMaze)}
						/>
					</Col>
				</Row>
			</div>
		);
	}
}

// Helpers

const createNodes = () => {
	const nodes = [];
	for (let row = 0; row < TOTAL_ROWS; row++) {
		const rowNodes = [];
		for (let column = 0; column < TOTAL_COLS; column++) {
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
		type: 'regular',
		isVisited: false,
		prev: null
	};
};

export default Pathfinder;
