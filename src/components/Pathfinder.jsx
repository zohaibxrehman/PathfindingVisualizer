import React, { Component } from 'react';
import NavBar from './NavBar/NavBar';
import Board from './Board/Board';
import Customisation from './Customisation/Customisation';

import { MazeFacade } from '../maze_algorithms/MazeFacade';
import { SearchFacade } from '../path_algorithms/SearchFacade';

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
			algorithm: 'bfs',
			maze: 'draw',
			buttonDisable: false
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
	}

	changeMaze(newMaze) {
		this.setState({ maze: newMaze });
	}

	// FIX!!
	drawMaze() {
		// this.reset();
		const nodesCopy = this.state.nodes.slice();
		const { maze } = this.state;
		const mazeFacade = new MazeFacade(nodesCopy, 0, 0, TOTAL_ROWS - 1, TOTAL_COLS - 1, 'horizontal');
		if (maze === 'draw') {
			return;
		}
		var { newNodes, drawnNodes } =
			maze === 'simpleTerrain'
				? mazeFacade.simpleTerrain()
				: maze === 'recursiveDivision'
					? mazeFacade.recursiveDivision()
					: maze === 'flappyBirdGrid' ? mazeFacade.flappyBirdGrid() : {};
		let curr;
		for (let i = 0; i < drawnNodes.length; i++) {
			setTimeout(() => {
				curr = drawnNodes[i];
				document.getElementById(`node_${curr.row}_${curr.column}`).className = 'walls';
			}, 6 * i);
		}
		return 6 * drawnNodes.length;
	}

	drawSearchPath() {
		const { nodes } = this.state;
		const startNode = nodes[START_NODE_ROW][START_NODE_COL];
		const endNode = nodes[END_NODE_ROW][END_NODE_COL];
		const searchFacade = new SearchFacade(startNode, endNode, nodes);
		const { path, visitedNodes } = searchFacade.breadthFirstSearch(startNode, endNode, nodes);

		let curr;
		for (let i = 0; i < visitedNodes.length; i++) {
			setTimeout(() => {
				curr = visitedNodes[i];
				document.getElementById(`node_${curr.row}_${curr.column}`).className = 'visited';
			}, 5 * i);
		}
		setTimeout(() => {
			for (let i = 0; i < path.length; i++) {
				setTimeout(() => {
					curr = path[i];
					document.getElementById(`node_${curr.row}_${curr.column}`).className = 'shortest-path';
				}, 30 * i);
			}
		}, 5 * visitedNodes.length);
	}

	reset() {
		let initialNodes = createNodes();
		initialNodes.forEach((node) => (node.type = 'regular'));
		document.querySelectorAll("[id^='node']").forEach((node) => {
			if (node.className === 'walls' || node.className === 'shortest-path' || node.className === 'visited') {
				node.className = 'regular';
			}
		});
		initialNodes[START_NODE_ROW][START_NODE_COL].type = 'start';
		initialNodes[END_NODE_ROW][END_NODE_COL].type = 'end';
		this.setState({ nodes: initialNodes });
	}

	visualize() {
		this.setState({ buttonDisable: true });
		this.reset();
		setTimeout(() => {
			const waitTime = this.drawMaze();
			setTimeout(() => {
				this.drawSearchPath();
				setTimeout(() => {
					this.setState({ buttonDisable: false });
				}, 6000);
			}, waitTime + 500);
		}, 1100);
	}

	render() {
		const { nodes, isMouseDown, buttonDisable } = this.state;
		return (
			<div onMouseUp={() => this.handleMouseUp()}>
				<NavBar />
				<Row>
					<Col lg={8}>
						<Board
							nodes={nodes}
							isMouseDown={isMouseDown}
							onMouseDown={(row, column) => this.handleMouseDown(row, column)}
							onMouseEnter={(row, column) => this.handleMouseEnter(row, column)}
						/>
					</Col>
					<Col lg={4}>
						<Customisation
							buttonDisable={buttonDisable}
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
		prev: null,
		dist: Infinity
	};
};

export default Pathfinder;
