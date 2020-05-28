export const simpleTerrain = (nodes, endX, endY) => {
	const drawnNodes1 = drawDungeon(nodes, endX, endY);
	let drawnNodes2 = [];
	nodes.forEach((row) => {
		row.forEach((node) => {
			if (Math.floor(Math.random() * 100 + 1) < 33 && node.type !== 'start' && node.type !== 'end') {
				node.type = 'wall';
				drawnNodes2.push(node);
			}
		});
	});
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
