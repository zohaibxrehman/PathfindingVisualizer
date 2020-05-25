class Queue {
	constructor() {
		this.elements = [];
	}

	enqueue(object) {
		this.elements.push(object);
	}

	dequeue() {
		return this.elements.shift();
	}

	isEmpty() {
		return this.elements.length == 0;
	}
}

export const breadthFirstSearch = (start, end, nodes) => {
	const nodesCopy = nodes.slice();
	solve(start, nodes);
	return reConstructPath(start, end, nodesCopy);
};

// later implement with stop when found functionality
const solve = (start, nodes) => {
	let q = new Queue();
	q.enqueue(start);

	nodes[start.row][start.column].isVisited = true;
	let node;
	let neighbours;
	while (!q.isEmpty()) {
		node = q.dequeue();
		neighbours = getNeighbours(node, nodes);

		neighbours.forEach((neighbour) => {
			if (!neighbour.isVisited) {
				q.enqueue(neighbour);
				neighbour.isVisited = true;
				neighbour.prev = node;
			}
		});
	}
};

const reConstructPath = (start, end, nodes) => {
	let path = [];
	for (let curr = end; curr !== null; curr = curr.prev) {
		path.push(curr);
	}

	path.reverse();

	if (path[0] === start) {
		path.shift();
		path.pop();
		return path;
	}
	return [];
};

const getNeighbours = (node, nodes) => {
	const neighbours = [];
	const { row, column } = node;
	if (row > 0) neighbours.push(nodes[row - 1][column]);
	if (row < nodes.length - 1) neighbours.push(nodes[row + 1][column]);
	if (column > 0) neighbours.push(nodes[row][column - 1]);
	if (column < nodes[0].length - 1) neighbours.push(nodes[row][column + 1]);
	return neighbours.filter((neighbour) => {
		return !neighbour.isVisited && neighbour.type !== 'wall';
	});
};
