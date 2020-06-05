export const flappyBirdGrid = (nodes, endX, endY) => {
	const drawnNodes1 = drawDungeon(nodes, endX, endY);
	let drawnNodes2 = [];
	for (let i = 2; i < endY; i += 2) {
		let hole = 1 + Math.floor(Math.random() * (endX - 1));
		for (let j = 0; j < endX; j++) {
			if (j !== hole && nodes[j][i].type !== 'start' && nodes[j][i].type !== 'end') {
				nodes[j][i].type = 'wall';
				drawnNodes2.push(nodes[j][i]);
			}
		}
	}
	return { nodes, drawnNodes: [ ...drawnNodes1, ...drawnNodes2 ] };
};

const drawDungeon = (nodes, endX, endY) => {
	let drawnNodes = [];
	for (let x = 0; x <= endX; x++) {
		nodes[x][0].type = 'wall';
		nodes[x][endY].type = 'wall';
		drawnNodes.push(nodes[x][0]);
		drawnNodes.push(nodes[x][endY]);
	}

	for (let y = 0; y <= endY; y++) {
		nodes[0][y].type = 'wall';
		nodes[endX][y].type = 'wall';
		drawnNodes.push(nodes[0][y]);
		drawnNodes.push(nodes[endX][y]);
	}

	return drawnNodes;
};
